
export enum UserActionEnum {
  SET_USER_NAME = 'SET_USER_NAME',
  SET_USER_THEME = 'SET_USER_THEME'
}

export type UserActions =
  | { type: UserActionEnum.SET_USER_NAME, payload: string }
  | { type: UserActionEnum.SET_USER_THEME, payload: string }

export const setUserName = (name:string): UserActions => ({ type: UserActionEnum.SET_USER_NAME, payload: name })
export const setUserTheme = (theme:string): UserActions => ({ type: UserActionEnum.SET_USER_THEME, payload: theme })