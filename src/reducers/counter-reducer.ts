import { CounterActionEnum } from '../actions/counter-actions'
import { Message } from '../components/UI/Message'
import { counterType, defaultCounterState } from '../models/counter-model'

const reducer = (state:counterType = defaultCounterState(), action: any ) => {
  Message(`Counter Reducer ${action.type}`, action.type)
  console.log('Running Counter Reducer...')
  switch(action.type) {
    case CounterActionEnum.INCREMENT_COUNTER:
      let addValue = state.value || 0
      return {
        value: addValue + 1
      }
    case CounterActionEnum.DECREMENT_COUNTER:
      let subValue = state.value || 0
      return {
        value: subValue - 1
      }
    default:
      return state
  }
}

export default reducer
