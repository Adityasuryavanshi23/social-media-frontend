
import loginReducer from "./slices/loginReducer";
import feedsSlice from "./slices/feedsReducer";
import userProfileReducer from "./slices/userProfileReducer";
export const reducer = {
  login: loginReducer,
  userprofile: userProfileReducer,
  feeds: feedsSlice,
};