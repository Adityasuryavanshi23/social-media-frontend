import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userposts: null,
};

const userProfileSlice = createSlice({
  name: "userprofile",
  initialState,
  reducers: {
    getPostsByUserIdSuccess(state , action) {
      state.userposts = action.payload;
    },
    getPostsByUserIdFailure(state , action) {
      state.userposts = action.payload;
    }
  },
});

export const {
  getPostsByUserIdSuccess,
  getPostsByUserIdFailure
} = userProfileSlice.actions;

export default userProfileSlice.reducer;