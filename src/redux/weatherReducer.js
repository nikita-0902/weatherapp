const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialstate = {
    isFetching: false
}

const weatherReducer = (state = initialstate, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const ToggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}


export default weatherReducer;