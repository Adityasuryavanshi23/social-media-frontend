import { makeApiRequest } from "../src/Http/axiosMain";

const useComents = () => {
  const addComment = async (postId, userId, text) => {
    try {
      const response = await makeApiRequest(`/post/${postId}/comment`, "post", {
        userId,
        text,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { addComment };
};

export default useComents;
