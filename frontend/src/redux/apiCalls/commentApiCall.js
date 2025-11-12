import { postActions } from "../slices/postSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

export function createComment(newComment) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post("/api/comments", newComment, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(postActions.addCommentToPost(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
