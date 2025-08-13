import {combineReducers} from 'redux';

import common, {
  actions as commonActions,
  selectors as commonSelectors,
  types as commonTypes,
} from './common';

import user, {
  actions as userActions,
  selectors as userSelectors,
  types as userTypes,
} from './user';


const rootReducer = combineReducers({
  common,
  user
});

export {commonActions, commonSelectors, commonTypes};
export {userActions, userSelectors, userTypes};

export default rootReducer;
