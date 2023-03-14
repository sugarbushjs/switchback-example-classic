import { RootState } from '../reducers'

export const selectState = (state: RootState) => state
export const selectTheme = (state: RootState) => state.SystemState.theme
export const selectTimeZone = (state: RootState) => state.SystemState.timeZone

export const selectCount = (state: RootState) => state.CounterState?.value || 0
export const selectStatus = (state: RootState) => state.StatusState.myStatus