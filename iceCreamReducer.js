const BUY_ICE_CREAM = "BUY_ICE_CREAM"
let buyIceCream = () => {
    return {
        type : BUY_ICE_CREAM,
        info : 'buying cake should reduce one count from cakes list'
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

module.exports = { buyIceCream , iceCreamReducer };