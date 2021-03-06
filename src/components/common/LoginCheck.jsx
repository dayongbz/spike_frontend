import { useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function LoginCheck({ children }) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();
  useEffect(() => {
    if (!state.user.username || !state.user.address) {
      const fetch = async () => {
        try {
          dispatch({ type: "SET_LOADING" });
          const user = await axios.get("/login", { withCredentials: true });
          const balance = await axios.get("/ether/balance", {
            withCredentials: true,
          });
          dispatch({
            type: "SET_USER",
            username: user.data.username,
            address: user.data.address,
            balance: balance.data,
          });
        } catch (err) {
          console.error(err);
          dispatch({
            type: "SET_MODAL",
            title: "Please Log in",
            content: "You have to log in for using our service.",
            callback: history.push,
            param: ["/intro"],
            only: true,
          });
        } finally {
          dispatch({ type: "RESET_LOADING" });
        }
      };
      fetch();
    }
  }, [dispatch, history.push, state.user.address, state.user.username]);
  return <>{children}</>;
}
export default LoginCheck;
