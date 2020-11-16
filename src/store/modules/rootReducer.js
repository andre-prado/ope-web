import { combineReducers } from 'redux';

import cart from './cart/reducer';
import edit from './edit/reducer';

export default combineReducers({
  cart,
  edit,
});
