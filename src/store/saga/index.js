import { all } from 'redux-saga/effects';
import { userProfileSaga } from './userprofile';

export default function* rootSaga() {
  yield all([
    userProfileSaga(),
  ]);
}
