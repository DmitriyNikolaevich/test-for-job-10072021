const SET_NAME = 'test_for_job/SET_NAME'
const SET_HITS = 'test_for_job/SET_HITS'
const SET_MISSES = 'test_for_job/SET_MISSES'

const initialState = {
    name: '',
    hits: 0,
    misses: 0
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_NAME:
            return {
                ...state,
                name: action.payload.name
            }

        case SET_HITS:
            return {
                ...state,
                hits: action.payload.hits
            }

        case SET_MISSES:
            return {
                ...state,
                misses: action.payload.misses
            }
    
        default:
            return state
    }
}

//AC

export const setNameAC = name => ({
    type: SET_NAME, payload: { name }
})
export const setHitAC = hits => ({
    type: SET_HITS, payload: { hits }
})
export const setMissesAC = misses => ({
    type: SET_MISSES, payload: { misses }
})

export default mainReducer