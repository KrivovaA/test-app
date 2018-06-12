import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FETCH_CATEGORIES, saveCategories } from '../actions/categoriesActions';
import categories from '../../data/categories';

function* getCategories() {
  yield call(delay, 2000); // 'query' to API
  yield put(saveCategories(categories));
}

export default function* rootSaga() {
  yield takeEvery(FETCH_CATEGORIES, getCategories);
}