const redux = require('redux');
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const initialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_INITIATED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_SUCCEEDED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_INITIATED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    // call api
    // dispatch relavent action
  };
};

const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchUsers());
