import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPostAction } from "../../store/action";
import Post from "../../components/Common/Post";
import { Link } from "react-router-dom";
import { PageTrans } from "../../components/applayout/PageTrans";

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
      <PageTrans>
        {userposts?.length === 0 ? (
          <h1 className="capitalize text-center my-10  ">
            its seems like you does not have posts , create some post <br />
            <br />
            <span className="text-violet-400 border p-2  border-violet-600 rounded-md">
              <Link to={"/home/create"}>create here</Link>
            </span>
          </h1>
        ) : (
          userposts?.map((post) => (
            <Post
              key={post._id}
              username={userdata?.firstname + " " + (userdata?.lastname || "")}
              userimage={userdata?.profilePicture}
              caption={post.desc}
              postimage={post.image}
              postuserId={post?.userId}
              postId={post._id}
              RefreshPosts={() => dispatch(getUserPostAction(userdata._id))}
            />
          ))
        )}
      </PageTrans>
    </>
  );
};

export default MyPosts;
