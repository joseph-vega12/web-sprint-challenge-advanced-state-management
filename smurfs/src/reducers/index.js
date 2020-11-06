import { FETCH_SUCCESS, FETCH_START, FETCH_FAILURE, POST_START, POST_SUCCESS, POST_FAILURE } from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
        case POST_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case FETCH_FAILURE:
        case POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
};