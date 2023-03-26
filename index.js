let { createStore, combineReducers } = require('redux');
let { buyCake , cakeReducer } = require('./cakeReducer');
let { buyIceCream , iceCreamReducer } = require('./iceCreamReducer');

let rootReducer = combineReducers({
  cake : cakeReducer,
  iceCream : iceCreamReducer
})

let store = createStore(rootReducer);
console.log('Our Initial state is ',store.getState())
let unsubscribe = store.subscribe(() => console.log('Our Updated state is ',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()