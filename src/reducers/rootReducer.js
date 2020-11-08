import { combineReducers } from 'redux'

import { cardsReducer } from './cardsReducer'
import { stacksReducer } from './stacksReducer'



export const rootReducer = combineReducers({
    cards: cardsReducer,
    stacks: stacksReducer
})