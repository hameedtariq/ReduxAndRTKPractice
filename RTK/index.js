const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');

const unsub = store.subscribe(() => console.log('state', store.getState()));

store.dispatch(cakeActions.ordered());

unsub();
