export const getProducts = (payload) => {
    const clothing = payload.filter(({ isAccessory }) => !isAccessory)
    const accessory = payload.filter(({ isAccessory }) => isAccessory)

    return {
        type: "GET_PRODUCTS",
        clothing,
        accessory,
    }
}