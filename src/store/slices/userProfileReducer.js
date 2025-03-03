import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userposts: null,
  followers: null,
  following: null,
  error: null,
};

const userProfileSlice = createSlice({
  name: "userprofile",
  initialState,
  reducers: {
    getPostsByUserIdSuccess(state, action) {
      state.userposts = action.payload;
    },
    getPostsByUserIdFailure(state, action) {
      state.error = action.payload;
    },
    getFollowersSuccess(state, action) {
      state.followers = action.payload;
    },
    getFollowersFailure(state, action) {
      state.error = action.payload;
    },
    getFollowingSuccess(state, action) {
      state.following = action.payload;
    },
    getFollowingFailure(state, action) {
      state.error = action.payload;
    }
  },
});

export const {
  getPostsByUserIdSuccess,
  getPostsByUserIdFailure,
  getFollowersSuccess,
  getFollowersFailure,
  getFollowingSuccess,
  getFollowingFailure
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
