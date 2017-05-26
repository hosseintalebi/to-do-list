import { INPUT_TEXT_CHANGED } from '../constants'

export default (state = '', action) => {
  switch (action.type) {
    case INPUT_TEXT_CHANGED:
      return action.payload
    default:
      return state
  }
}
