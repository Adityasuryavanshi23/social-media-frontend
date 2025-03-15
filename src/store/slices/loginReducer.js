import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userdata: null,
  otheruserdata: {
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
    }
  },
});

export const {
  setOtherUserdata,
  setOtherUserdataloading,
  setUserdata,
  setOtherUserdataFail,
  logoutUser
} = loginSlice.actions;

export default loginSlice.reducer;