import _ from 'lodash'

import { ADD_TODO, TOGGLE_DONE, REMOVE_TODO } from '../constants'

export default (state = {}, action) => {

  switch (action.type) {
    case ADD_TODO:
      return {
          ...state,
          [action.payload.id]: {
            text: action.payload.text,
            done: false,
            id: action.payload.id,
          },
      }
    case TOGGLE_DONE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          done: action.payload.value,
        }
      }
    case REMOVE_TODO:
      return {
        ..._.omit(state, action.payload.id),
      }
    default:
      return state
  }
}
