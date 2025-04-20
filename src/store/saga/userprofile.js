
import { takeLatest, call, put } from 'redux-saga/effects';
import { getPostsByUserIdSuccess, getPostsByUserIdFailure } from '../slices/userProfileReducer.js';
import { makeApiRequest } from '../../Http/axiosMain';
import { GETMY_USER_Detail, GETUSER_Detail, GETUSER_POSTS ,GET_OTHER_USER_POST} from '../action/index.js';
import { setOtherUserdata,setOtherUserdataFail,setOtherUserdataloading, setotheruserPosts, setUserdata } from '../slices/loginReducer.js';

function* getPostsByUserId(action) {
  try {
    const response = yield call(makeApiRequest, `/post/user/${action.payload}` , "get");
    yield put(getPostsByUserIdSuccess(response));
  } catch (error) {
    yield put(getPostsByUserIdFailure(error.message));
  }
}

function* getUserdetailSaga(action) {
  try {
    yield put(setOtherUserdataloading());
    const response = yield call(makeApiRequest, `/user/${action.payload}` , "get");
    yield put(setOtherUserdata(response));
  } catch (error) {
    yield put(setOtherUserdataFail(error));
  }
}

function* getMyUserprofileSaga(action) {
  try {
    const response = yield call(makeApiRequest, `/user/${action.payload}` , "get");
    yield put(setUserdata(response));
  } catch (error) {
    console.log(error);
  }
}
function* fetchOtehruserPostsaga(action) {
  try {
    const response = yield call(makeApiRequest, `/post/user/${action.payload}` , "get");
    yield put(setotheruserPosts(response));
  } catch (error) {
    yield put(getPostsByUserIdFailure(error.message));
  }
}

export function* userProfileSaga() {
  yield takeLatest(GETUSER_POSTS , getPostsByUserId);
  yield takeLatest(GETUSER_Detail , getUserdetailSaga);
  yield takeLatest(GETMY_USER_Detail , getMyUserprofileSaga);
  yield takeLatest(GET_OTHER_USER_POST , fetchOtehruserPostsaga);


}
