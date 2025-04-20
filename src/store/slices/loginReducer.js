import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userdata: null,
  otheruserdata: {
    otheruserPosts: null,
    data: null,
    loading: false,
    error: null,
  },
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
    setOtherUserdata(state, action) {
      state.otheruserdata.data = action.payload;
      state.otheruserdata.loading = false;
    },
    setOtherUserdataloading(state) {
      state.otheruserdata.loading = true;
    },
    setOtherUserdataFail(state) {
      state.otheruserdata = null;
    },
    logoutUser(state) {
      state.userdata = null;
      state.isuserloggedin = false;
    },
    setotheruserPosts(state , action) {
      state.otheruserdata.otheruserPosts = action.payload;
    },
  },
});

export const {
  setOtherUserdata,
  setOtherUserdataloading,
  setUserdata,
  setOtherUserdataFail,
  logoutUser,
  setotheruserPosts
} = loginSlice.actions;

export default loginSlice.reducer;