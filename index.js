let { createStore, combineReducers , applyMiddleware } = require('redux');
let { buyCake , cakeReducer } = require('./cakeReducer');
let { buyIceCream , iceCreamReducer } = require('./iceCreamReducer');
let { createLogger } = require('redux-logger');
const logger = createLogger({
  // ...options
});

let rootReducer = combineReducers({
  cake : cakeReducer,
  iceCream : iceCreamReducer
})

let store = createStore(rootReducer , applyMiddleware(logger));
console.log('Our Initial state is ',store.getState())
let unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()