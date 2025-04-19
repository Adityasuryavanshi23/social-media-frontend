
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  feeds: [],
  error: null
};

const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setFeedsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFeeds: (state, action) => {
      state.feeds = action.payload;
      state.loading = false;
      state.error = null;
    },
    setFeedsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    likeDislikePostSuccess(state, action) {
      const { postId, userId, isLiked } = action.payload;
      
      state.feeds = state.feeds.map(post => {
        if (post._id === postId) {
          let updatedLikes = [...post.likes];
          
          if (isLiked) {
            // Remove user from likes if already liked
            updatedLikes = updatedLikes.filter(id => id !== userId);
          } else {
            // Add user to likes if not already liked
            updatedLikes.push(userId);
          }
          
          return {
            ...post,
            likes: updatedLikes
          };
        }
        return post;
      });
    },
  }
});

export const { setFeedsLoading, setFeeds, setFeedsError , likeDislikePostSuccess } = feedsSlice.actions;
export default feedsSlice.reducer;
