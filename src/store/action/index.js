
export const GETUSER_POSTS = 'GETUSER_POSTS'
export const GETUSER_Detail = 'GETUSER_Detail'
export const GETMY_USER_Detail = 'GETMY_USER_Detail'

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
