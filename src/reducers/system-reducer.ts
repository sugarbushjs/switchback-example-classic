import { SystemActionEnum, SystemActions } from '../actions/system-actions'
import { defaultSystemState, systemStateType } from '../models/system-mode'
import { Message } from '../components/UI/Message'

const reducer = (state: systemStateType = defaultSystemState(), action: SystemActions ) => {
  if (!state.isLoading) {
    Message(`System Reducer ${action.type}`, action.type)
  }
  console.log('Running SYSTEM Reducer...')
  switch(action.type) {
    case SystemActionEnum.FETCH_SYSTEM_THEME:
      return {
        ...state,
        theme: 'light',
        isLoading: false,
      }
    case SystemActionEnum.SET_SYSTEM_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case SystemActionEnum.SET_SYSTEM_TIME:
      return {
        ...state,
        timeZone: action.payload
      }
    default:
      return state
  }
}

export default reducer