import React, { useEffect, useState } from "react";
import useComents from "../../../hooks/useComents";
import PropTypes from "prop-types";
import moment from "moment";

export const PostCommments = ({ comments, postid, userdata }) => {
  const [Comments, setComments] = useState();
  const { addComment } = useComents();
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    setComments(
      comments?.length
        ? [...comments]?.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        : []
    );
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(postid, userdata?._id, newComment).then((response) => {
        console.log(response);
      });
      const newCommentObj = {
        id: 1,
        username: userdata?.firstname,
        userImage: userdata.profilePicture,
        text: newComment,
        createdAt: new Date(),
      };
      setComments([newCommentObj, ...Comments]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-black  text-white max-w-full  border py-4">
      {/* Post has already been shown in the image */}
      <div className="border-t border-gray-800 pt-4 px-4">
        {/* Comments header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">
            Comments ({Comments?.length || 0})
          </h3>
          <div className="text-sm text-gray-400">Latest first</div>
        </div>

        {/* Comment input */}
        <div className="flex items-start space-x-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
            <img
              referrerPolicy="no-referrer"
              src={
                userdata?.profilePicture ||
                "https://i.pinimg.com/474x/08/35/0c/08350cafa4fabb8a6a1be2d9f18f2d88.jpg"
              }
              alt="Your avatar"
            />
          </div>
          <div className="flex-1">
            <textarea
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 resize-none"
              placeholder="Add a comment..."
              rows={2}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex justify-end mt-2">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium"
                onClick={handleAddComment}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* Comments list */}
        <div className="space-y-6">
          {Comments?.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img
                  src={comment.userImage}
                  referrerPolicy="no-referrer"
                  alt={`${comment.username}'s avatar`}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="font-medium mr-2">{comment.username}</span>
                  <span className="text-xs text-gray-500">
                    {moment(comment.createdAt).fromNow()}
                  </span>
                </div>
                <p className="text-gray-200 mb-2 ">{comment.text}</p>
                <div className="flex space-x-4 text-sm text-gray-400">
                  <button className="flex items-center space-x-1 hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    <span>{comment.likes}</span>
                  </button>
                  <button className="hover:text-gray-300">Reply</button>
                  <button className="hover:text-gray-300">Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PostCommments.propTypes = {
  comments: PropTypes.array.isRequired,
  postid: PropTypes.string.isRequired,
  userdata: PropTypes.object.isRequired,
};
