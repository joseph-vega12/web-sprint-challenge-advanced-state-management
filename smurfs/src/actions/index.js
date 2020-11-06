import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const POST_START = 'POST_START'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'


export const fetchSmurfs = (url) => (dispatch) => {
    dispatch({ type: FETCH_START })
    axios.get(url)
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_FAILURE, payload: err})
        })
}

export const postSmurf = (smurf) => (dispatch) => {
    console.log(smurf)
    dispatch({ type: POST_START })
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_FAILURE, payload: err})
        })
}