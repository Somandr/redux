import { CREATE_POST } from "./types"
import {showAlert} from './actions'

const forbidden = [
  'bad', 'spam', 'advertising'
]

export function forbiddenWordsMiddleware({dispatch}) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word))
        if (found.length) {
          return dispatch(showAlert('You are spamer!'))
        }
      }
      return next(action)
    }
  }
}
