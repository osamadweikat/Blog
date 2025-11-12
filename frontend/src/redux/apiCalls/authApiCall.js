import request from "../../utils/request";
import { authActions } from "../slices/authSlice";
import { toast } from "react-toastify";

export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/login", user);
      dispatch(authActions.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
}
