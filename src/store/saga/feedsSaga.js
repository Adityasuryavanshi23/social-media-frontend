
import { call, put, takeLatest } from 'redux-saga/effects';
import { makeApiRequest } from '../../Http/axiosMain';
import { setFeedsError, setFeeds, setFeedsLoading } from '../slices/feedsReducer';
import { FETCH_USER_FEEDS, LIKE_DISLIKE_POST } from '../action';

function* fetchUserFeeds(action) {
  try {
    yield put(setFeedsLoading(true))
    const response = yield call(makeApiRequest, `/post/${action.payload}/timeline` , "get");
    yield put(setFeeds(response));
  } catch (error) {
    yield put(setFeedsError(error.message));
  }
}
function* likeDislikePostSaga(action) {
  try {
    const { postId, userId } = action.payload;
    
    // Make API request to like/dislike post
    const response = yield call(
      makeApiRequest, 
      `/post/${postId}/like_dislike`,
      "put",
      {
        userId
      }
    );
    console.log(response, "response")
  } catch (error) {
    console.error('Error liking/disliking post:', error);
  }
}
export default function* feedsSaga() {
  yield takeLatest(LIKE_DISLIKE_POST, likeDislikePostSaga);
  yield takeLatest(FETCH_USER_FEEDS, fetchUserFeeds);
}
