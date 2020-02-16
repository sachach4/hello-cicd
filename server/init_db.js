module.exports = client => {
  //   client.query(`DROP TABLE  users;`, [], (err, result) => {
  //     if (err) {
  //       return console.error(err.message);
  //     }
  //   });

  const sql_create = `CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(100) NOT NULL,
          password VARCHAR(100) NOT NULL
        );`;

  client.query(sql_create, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Création réussie de la table 'Users'");
  });
};
