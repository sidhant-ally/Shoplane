export const getProducts = (payload) => {
    const clothing = payload.filter(({ isAccessory }) => !isAccessory)
    const accessory = payload.filter(({ isAccessory }) => isAccessory)

    return {
        type: "GET_PRODUCTS",
        clothing,
        accessory,
    }
}

export const getCart = (payload) => {
    return {
        type: "GET_CART",
        product: payload,
    }
}