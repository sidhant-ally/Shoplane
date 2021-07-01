import axios from "axios"

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
export const clearCartProducts = () => {
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/order")
    return { type: "CLEAR_CART" }
}

export const setRef = (clothingRef, accessoryRef) => {
    return {
        type: "SET_REF",
        clothingRef,
        accessoryRef,
    }
}