import { createAction, handleActions } from 'redux-actions';

export const types = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  CLEAN_COMMON_DATA: 'CLEAN_COMMON_DATA',
};

export const actions = {
  setLanguage: createAction(types.SET_LANGUAGE),
  cleanCommonData: createAction(types.CLEAN_COMMON_DATA),
};

export const selectors = {
    selectLanguage: state => state.common.language
}

const defaultState = {
  language: 'vi',
};

export default handleActions(
  {
    [types.SET_LANGUAGE]: (state, { payload }) => {
      return { ...state, language: payload };
    },
    [types.CLEAN_COMMON_DATA]: () => defaultState
  },
  defaultState,
);