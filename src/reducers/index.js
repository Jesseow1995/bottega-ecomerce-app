import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import HeaderNavBar from './headernavbarReducers';

const rootReducer = combineReducers({
  form,
  HeaderNavBar
});

export default rootReducer;