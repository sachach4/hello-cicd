import auth from './../reducers/authReducer';

const initialState =  {
  isAuth: false,
  user: {},
  isLoading: false
  
};

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(auth(undefined, {})).toEqual(initialState);
  });
});

