import { createStore } from 'redux'
import { componseWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducers'

const store = createStore(reducer,componseWithDevTools)

export default store;