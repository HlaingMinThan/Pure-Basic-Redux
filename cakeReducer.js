const BUY_CAKE = "BUY_CAKE"

//action function is a function which is return a action object (type and info)
let buyCake = () => {
  return {
    type : BUY_CAKE,
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

module.exports = { buyCake , cakeReducer };