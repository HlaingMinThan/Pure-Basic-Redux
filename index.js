let { createStore} = require('redux');

const BUY_CAKE = "BUY_CAKE"

//action function is a function which is return a action object (type and info)
let buyCake = () => {
    return {
        type : BUY_CAKE,
        info : 'buying cake should reduce one count from cakes list'
    }
}

let initialState = { cakes: 10 }
function reducer(state = initialState, action) {
    switch (action.type) {
      case BUY_CAKE:
        return { cakes: state.cakes - 1 }
      default:
        return state
    }
}

let store = createStore(reducer);
console.log('Our Initial state is ',store.getState())
let unsubscribe = store.subscribe(() => console.log('Our Updated state is ',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()