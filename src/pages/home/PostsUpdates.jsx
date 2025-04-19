import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFeedsAction } from "../../store/action";
import Post from "../../components/Common/Post";

const PostsUpdates = () => {
  const dispatch = useDispatch();
  const { userdata } = useSelector((state) => state.login);
  const { feeds } = useSelector((state) => state.feeds);
  useEffect(() => {
    dispatch(getUserFeedsAction(userdata._id));
  }, []);
  return (
    <div>
      {feeds?.map((post) => (
        <Post
          key={post._id}
          postId={post._id}
          postuserId={post?.userId}
          username={post?.user?.firstname || post?.user?.username}
          userimage={post?.user?.profilePicture}
          caption={post.desc}
          postimage={post.image}
          createdAt={post.createdAt}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default PostsUpdates;
