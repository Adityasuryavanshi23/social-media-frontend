import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userdata: null,
  isuserloggedin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserdata(state , action) {
      state.userdata = action.payload;
      state.isuserloggedin = true;
    },
    logoutUser(state) {
      state.userdata = null;
      state.isuserloggedin = false;
    }
  },
});

export const {
  setUserdata,
  logoutUser
} = loginSlice.actions;

export default loginSlice.reducer;