const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { hash, compare } = require("bcryptjs");
const { Pool } = require("pg");

console.log('tutu', process.env.DATABASE_URL)
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: false
});
pool.connect();

require("../init_db")(pool);


exports.signup = function(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.send(401, "Invalid Credentials");
  } else {
    try {
      pool.query(
        "SELECT * from users where email = $1",
        [req.body.email],
        async function(err, rows) {
          if (err) res.send(err);

          if (rows && rows.rowCount === 0) {
            console.log("There is no such user, adding now");
            const hashedPassword = await hash(req.body.password, 10);
            pool.query(
              "INSERT into users(email, password) VALUES($1, $2) RETURNING id",
              [req.body.email, hashedPassword]
            );
            let token = jwt.sign(
              { email: req.body.email },
              process.env.JWT_SECRET
            );
            res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          } else {
            res.send("User already exists in database");
          }
        }
      );
    } catch (err) {}
  }
};


exports.login = function(req, res) {
  if (!req.body.email) {
    return res.send(401, "Authentication error. Invalid Credentials");
  } else {
    pool.query(
      "SELECT * from users where email = $1",
      [req.body.email],
      async function(err, rows) {
        if (err) throw err;
        if (rows && rows.rowCount === 0) {
          res.send("There is no such user");
        } else {
          console.log("User exists in database");

          const passwordValid = await compare(
            req.body.password,
            rows.rows[0].password
          );
          if (!passwordValid) {
            res.send("Invalid password");
          } else {
            let token = jwt.sign(
              { email: req.body.email },
              process.env.JWT_SECRET
            );
            res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          }
        }
      }
    );
  }
}