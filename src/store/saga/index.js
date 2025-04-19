import { all } from 'redux-saga/effects';
import { userProfileSaga } from './userprofile';
import feedsSaga from './feedsSaga';

export default function* rootSaga() {
  yield all([
    userProfileSaga(),
    feedsSaga()
  ]);
}
