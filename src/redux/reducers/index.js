const initialState = {
    clothing: [],
    accessory: [],
    cart: [],
}

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, clothing: action.clothing, accessory: action.accessory };
        case "GET_CART":
            let cart = [...state.cart]
            let product = action.product
            let cartItem = cart.find(item => item.product.id === product.id)
            if (cartItem)
                cartItem.quantity = cartItem.quantity + 1
            else
                cart.push({ product, quantity: 1 })
            return { ...state, cart };
        default:
            return state;
    }
}

export default Reducers;
