import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";

import DispatchContext from "../context/DispatchContext";

function EmailVerify() {
  const dispatch = useContext(DispatchContext);
  const [status, setStatus] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const parsed = queryString.parse(location.search);
    console.log(parsed.email, parsed.code);
    dispatch({ type: "SET_LOADING" });
    const fetch = async () => {
      try {
        await axios.patch(
          `https://api.dayong.xyz/emailverify?email=${parsed.email}&code=${parsed.code}`
        );
        setStatus(1);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch({ type: "RESET_LOADING" });
      }
    };
    fetch();
  }, [dispatch, location.search]);
  return (
    <div className="emailverify-wrapper">
      {status ? "🎉Success🎉" : "Please check your email"}
    </div>
  );
}

export default EmailVerify;
