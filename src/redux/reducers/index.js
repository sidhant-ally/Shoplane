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
            const productId = action.product.id
            let newProduct = true

            const cart = state.cart.map((item) => {
                if (item.product.id === productId) {
                    item.quantity += 1
                    newProduct = false
                }
                return item
            })
            if (newProduct)
                cart.push({ product: action.product, quantity: 1 })

            return { ...state, cart };
        default:
            return state;
    }
}

export default Reducers;
