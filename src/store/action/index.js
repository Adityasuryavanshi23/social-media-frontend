
export const GETUSER_POSTS = 'GETUSER_POSTS'

export const getUserPostAction = (payload) => ({
  type: GETUSER_POSTS,
  payload
})
export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const GET_FOLLOWING = 'GET_FOLLOWING';

export const getFollowersAction = (payload) => ({
  type: GET_FOLLOWERS,
  payload,
});

export const getFollowingAction = (payload) => ({
  type: GET_FOLLOWING,
  payload,
});
