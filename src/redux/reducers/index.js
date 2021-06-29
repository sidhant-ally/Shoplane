const initialState = {
    clothing: [],
    accessory: [],
    cart: [],
    clothingRef: null,
    accessoryRef: null,
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
        case "CLEAR_CART":
            return { ...state, cart: [] }
        case "SET_REF":
            return { ...state, clothingRef: action.clothingRef, accessoryRef: action.accessoryRef }
        default:
            return state;
    }
}

export default Reducers;
