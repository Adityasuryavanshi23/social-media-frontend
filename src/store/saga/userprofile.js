import { takeLatest, call, put } from 'redux-saga/effects';
import { 
  getPostsByUserIdSuccess, getPostsByUserIdFailure, 
  getFollowersSuccess, getFollowersFailure, 
  getFollowingSuccess, getFollowingFailure 
} from '../slices/userProfileReducer.js';

import { makeApiRequest } from '../../Http/axiosMain';
import { GETUSER_POSTS, GET_FOLLOWERS, GET_FOLLOWING } from '../action/index.js';

function* getPostsByUserId(action) {
  try {
    const response = yield call(makeApiRequest, `/post/user/${action.payload}`, "get");
    yield put(getPostsByUserIdSuccess(response));
  } catch (error) {
    yield put(getPostsByUserIdFailure(error.message));
  }
}

// Followers Fetch  Saga
function* getFollowers(action) {
  try {
    const response = yield call(makeApiRequest, `/user/${action.payload}/followers`, "get");
    yield put(getFollowersSuccess(response));
  } catch (error) {
    yield put(getFollowersFailure(error.message));
  }
}

// Following Fetch saga
function* getFollowing(action) {
  try {
    const response = yield call(makeApiRequest, `/user/${action.payload}/following`, "get");
    yield put(getFollowingSuccess(response));
  } catch (error) {
    yield put(getFollowingFailure(error.message));
  }
}


export function* userProfileSaga() {
  yield takeLatest(GETUSER_POSTS, getPostsByUserId);
  yield takeLatest(GET_FOLLOWERS, getFollowers);
  yield takeLatest(GET_FOLLOWING, getFollowing);
}
