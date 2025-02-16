
import { takeLatest, call, put } from 'redux-saga/effects';
import { getPostsByUserIdSuccess, getPostsByUserIdFailure } from '../slices/userProfileReducer.js';
import { makeApiRequest } from '../../Http/axiosMain';
import { GETUSER_POSTS } from '../action/index.js';

function* getPostsByUserId(action) {
  try {
    const response = yield call(makeApiRequest, `/post/user/${action.payload}` , "get");
    yield put(getPostsByUserIdSuccess(response));
  } catch (error) {
    yield put(getPostsByUserIdFailure(error.message));
  }
}

export function* userProfileSaga() {
  yield takeLatest(GETUSER_POSTS , getPostsByUserId);
}
