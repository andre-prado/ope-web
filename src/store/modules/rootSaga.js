import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import edit from './edit/sagas';

export default function* rootSaga() {
  return yield all([cart, edit]);
}
