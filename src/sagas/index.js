import { fork } from 'redux-saga/effects';
import categories from './categoriesSagas';

export default function* rootSaga() {
  yield fork(categories);
}