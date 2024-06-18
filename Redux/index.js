const redux = require('redux');
const produce = require('immer').produce;

const orderCake = () => {
  return {
    type: 'CAKE_ORDERED',
  };
};

const initialState = {
  cakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CAKE_ORDERED':
      // return {
      //   ...state,
      //   cakes: state.cakes - 1,
      // };
      return produce(state, (draft) => {
        draft.cakes = draft.cakes - 1;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch(orderCake());

console.log(store.getState());
