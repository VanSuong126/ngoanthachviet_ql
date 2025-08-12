import { createAction, handleActions } from 'redux-actions';

export const types = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  REGISTER_USER: 'REGISTER_USER',
  SET_TOKEN: 'SET_TOKEN',
  SET_USER_ID: 'SET_USER_ID',
  SET_USER_DATA: 'SET_USER_DATA',
  TOGGLE_SAVE_LOGIN: 'TOGGLE_SAVE_LOGIN',
  SET_RULES: 'SET_RULES',
  CLEAN_USER_DATA: 'CLEAN_USER_DATA',
};

export const actions = {
  userLogin: createAction(types.USER_LOGIN),
  userLogout: createAction(types.USER_LOGOUT),
  changePassword: createAction(types.CHANGE_PASSWORD),
  forgotPassword: createAction(types.FORGOT_PASSWORD),
  registerUser: createAction(types.REGISTER_USER),
  setToken: createAction(types.SET_TOKEN),
  setUserId: createAction(types.SET_USER_ID),
  setUserData: createAction(types.SET_USER_DATA),
  toggleSaveLogin: createAction(types.TOGGLE_SAVE_LOGIN),
  setRules: createAction(types.SET_RULES),
  cleanUserData: createAction(types.CLEAN_USER_DATA),
};

export const selectors = {
  selectUserData: state => state.user.userData,
  selectToken: state => state.user.token,
  selectUserId: state => state.user.userId,
  selectSaveLogin: state => state.user.saveLogin,
  selectRules: state => state.user.rules
}

const defaultState = {
  rules: null,
  saveLogin: false,
  userData: null,
  token: null,
  userId: null
};

export default handleActions(
  {
    [types.SET_TOKEN]: (state, { payload }) => {
      return { ...state, token: payload };
    },
    [types.SET_USER_ID]: (state, { payload }) => {
      return { ...state, userId: payload };
    },
    [types.SET_USER_DATA]: (state, { payload }) => {
      return { ...state, userData: payload };
    },
    [types.TOGGLE_SAVE_LOGIN]: (state, { payload }) => {
      return { ...state, saveLogin: payload };
    },
    [types.SET_RULES]: (state, { payload }) => {
      return { ...state, rules: payload };
    },
    [types.CLEAN_USER_DATA]: () => defaultState
  },
  defaultState,
);