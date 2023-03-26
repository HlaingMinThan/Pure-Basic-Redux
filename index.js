let { createStore, combineReducers } = require('redux');

const BUY_CAKE = "BUY_CAKE"

//action function is a function which is return a action object (type and info)
let buyCake = () => {
  return {
    type : BUY_CAKE,
    info : 'buying cake should reduce one count from cakes list'
  }
}

const BUY_ICE_CREAM = "BUY_ICE_CREAM"
let buyIceCream = () => {
    return {
        type : BUY_ICE_CREAM,
        info : 'buying cake should reduce one count from cakes list'
    }
}

let initialCakeState = { cakes: 10 }
function cakeReducer(state = initialCakeState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return { cakes: state.cakes - 1 }
      default:
        return state
      }
  }

let initialIceCreamState = { ice_creams: 20 };
function iceCreamReducer(state = initialIceCreamState, action) {
    switch (action.type) {
      case BUY_ICE_CREAM:
        return { ice_creams: state.ice_creams - 1 }
      default:
        return state
    }
}

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