const initialState = {
    clothing: [],
    accessory: [],
}

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, clothing: action.clothing, accessory: action.accessory };
        default:
            return state;
    }
}

export default Reducers;
