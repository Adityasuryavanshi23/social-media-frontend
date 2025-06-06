import moment from "moment";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeDislikePostSuccess } from "../../store/slices/feedsReducer";
import { likeDislikePostAction } from "../../store/action";
import { PostCommments } from "../../pages/home/PostComments";
import { useNavigate } from "react-router-dom";
import { makeApiRequest } from "../../Http/axiosMain";
import toast from "react-hot-toast";

const Post = ({
  userimage,
  username,
  postimage,
  caption,
  likes,
  postId,
  comments,
  postuserId,
  createdAt,
  RefreshPosts,
}) => {
  const [showcomments, setShowcomments] = React.useState(false);
  const { userdata } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const userId = userdata?._id;
  // Check if current user has liked the post
  const isLiked = useMemo(() => {
    return userId === postuserId ? false : likes?.includes(userId);
  }, [likes, userId]);
  const handleLikeDislike = () => {
    // Optimistically update UI
    dispatch(
      likeDislikePostSuccess({
        postId,
        userId,
        isLiked,
      })
    );

    // Make API request
    dispatch(
      likeDislikePostAction({
        userId,
        postId,
      })
    );
  };
  const handleDeletePost = async () => {
    try {
      await makeApiRequest(`/post/${postId}`, "delete");
      RefreshPosts();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="relative mb-2 w-full last:mb-0 sm:mb-4 ">
      <div className="flex border-b border-t border-[#ae7aff] p-4  text-white sm:border-l sm:border-r rounded-lg ">
        <div></div>
        <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12 ml-4">
          <img
            onClick={() => nav(`/userprofile/${postuserId}`)}
            referrerPolicy="no-referrer"
            src={
              userimage ||
              "https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
            }
            onError={(e) => {
              e.target.src =
                "https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg";
              e.target.onerror = null;
            }}
            alt={username || "Aqua Explorer"}
            className="h-full w-full rounded-full object-cover cursor-pointer"
          />
        </div>
        <div className="pl-4 pt-1">
          <div className="mb-2 flex items-center gap-x-2">
            <div className="w-full">
              <h2 className="inline-block font-bold">{username}</h2>
              <span className="ml-2 inline-block text-sm text-gray-400">
                {moment(createdAt).fromNow()}
              </span>
            </div>
            {userdata?._id === postuserId && (
              <i
                onClick={handleDeletePost}
                className="fa-solid fa-trash cursor-pointer w-4 h-4 text-sm text-red-700"
              ></i>
            )}
            <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                ></path>
              </svg>
            </button>
          </div>
          <p className="mb-4 text-sm sm:text-base">{caption}</p>
          {postimage && (
            <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
              <img
                src={postimage}
                alt="attachment-0"
                className="rounded-md h-[350px] max-w-[500px] "
              />
            </div>
          )}
          <div className="flex gap-x-4">
            <button
              onClick={handleLikeDislike}
              className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-[#ae7aff]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isLiked ? "#ae7aff" : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 group-focus:fill-[#ae7aff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                ></path>
              </svg>
              <span>{likes?.length}</span>
            </button>
            <button
              onClick={() => setShowcomments(!showcomments)}
              className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{comments?.length || 0}</span>
            </button>
            <div className="ml-auto">
              <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] focus:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showcomments && (
        <PostCommments
          postid={postId}
          userdata={userdata}
          comments={comments}
        />
      )}
    </div>
  );
};

Post.propTypes = {
  userimage: PropTypes.string,
  username: PropTypes.string,
  postimage: PropTypes.string,
  caption: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  RefreshPosts: PropTypes.func,
  createdAt: PropTypes.string,
  postId: PropTypes.string,
  postuserId: PropTypes.string,
};

export default Post;
