
export const GETUSER_POSTS = 'GETUSER_POSTS'
export const GETUSER_Detail = 'GETUSER_Detail'
export const GETMY_USER_Detail = 'GETMY_USER_Detail'
export const FETCH_USER_FEEDS = 'FETCH_USER_FEEDS'
export const LIKE_DISLIKE_POST = 'LIKE_DISLIKE_POST'
export const GET_OTHER_USER_POST = 'GET_OTHER_USER_POST'



export const likeDislikePostAction = (payload) => ({
  type: LIKE_DISLIKE_POST,
  payload
})
export const getotheruserPosts= (payload) => ({
  type: GET_OTHER_USER_POST,
  payload
})
export const getUserPostAction = (payload) => ({
  type: GETUSER_POSTS,
  payload
})

export const getUsersDetailAction = (payload) => ({
  type: GETUSER_Detail,
  payload
})

export const getMyUserprofileAction = (payload) => ({
  type: GETMY_USER_Detail,
  payload
})



export const getUserFeedsAction = (payload) => ({
  type: FETCH_USER_FEEDS,
  payload
})
