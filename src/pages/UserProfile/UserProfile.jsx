import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getotheruserPosts, getUsersDetailAction } from "../../store/action";
import Post from "../../components/Common/Post";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { otheruserdata } = useSelector((state) => state.login);
  const { otheruserPosts } = useSelector((state) => state.login.otheruserdata);
  useEffect(() => {
    if (id) {
      dispatch(getUsersDetailAction(id));
      dispatch(getotheruserPosts(id));
    }
  }, [id]);
  return (
    <div>
      <div className="mb-4 " onClick={() => nav(-1)}>
        {" "}
        <i className="bi bi-arrow-left-circle text-2xl cursor-pointer"></i>
      </div>
      {otheruserPosts?.length === 0 ? (
        <div>
          <img src="" alt="" />
          <h1 className="text-center capitalize text-purple-400 text-2xl">
            {otheruserdata?.data?.firstname} does not posted yet
          </h1>
        </div>
      ) : (
        otheruserPosts?.map((post) => (
          <Post
            key={post._id}
            username={otheruserdata?.data?.firstname}
            userimage={otheruserdata?.data?.profilePicture}
            caption={post?.desc}
            postimage={post?.image}
            createdAt={post?.createdAt}
            postId={post?._id}
            likes={post?.likes}
            comments={post?.comments}
          />
        ))
      )}
    </div>
  );
};

export default UserProfile;
