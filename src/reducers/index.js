import { combineReducers } from 'redux'

import musicReducer from './musicReducer'

// 合并成一个Reducer
const rootReducer = combineReducers({
    musicReducer
})

export default rootReducer;