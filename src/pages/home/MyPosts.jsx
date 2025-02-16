import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPostAction } from "../../store/action";
import Post from "../../components/Common/Post";

const MyPosts = () => {
  const dispatch = useDispatch();
  const { userdata } = useSelector((state) => state.login);
  const { userposts } = useSelector((state) => state.userprofile);
  console.log(userposts);
  useEffect(() => {
    dispatch(getUserPostAction(userdata._id));
  }, []);

  return (
    <>
      {userposts?.map((post) => (
        <Post
          key={post._id}
          username={userdata?.firstname + " " + userdata?.lastname}
          userimage={userdata?.profilePicture}
          caption={post.desc}
          postimage={post.image}
        />
      ))}
    </>
  );
};

export default MyPosts;
