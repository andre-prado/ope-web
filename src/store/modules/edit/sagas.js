import { call, takeLatest, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToEditSuccess } from './actions';

function* addToEdit({ id }) {
  const response = yield call(api.get, `livro/${id}`);

  yield put(addToEditSuccess(response.data));
}

export default all([takeLatest('@edit/ADD_REQUEST', addToEdit)]);
