import { combineReducers } from 'redux'

import { cardsReducer } from './cardsReducer'
import { stacksReducer } from './stacksReducer'
import { scoresReducer } from './scoresReducer'



export const rootReducer = combineReducers({
    cards: cardsReducer,
    stacks: stacksReducer,
    scores: scoresReducer
})