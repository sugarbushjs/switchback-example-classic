import { adpStore } from '../components/App'
import { store } from '../components/App/store'
import { adaptiveDispatch } from 'sugarbush'

export const SystemDispatch = () => adpStore.dispatch('SystemState')
export const CounterDispatch = () => adaptiveDispatch(
  { dispatch: store.dispatch,
    key: 'CounterState',
    verbose: true //verbose is auto turned off in production env
  })



