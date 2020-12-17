import { useEffect, useContext } from "react";
import axios from "axios";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function GetRecord({ children }) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch({ type: "RESET_RECORD" });
        dispatch({ type: "SET_LOADING" });
        const record = await axios.get("/ether/record", {
          withCredentials: true,
        });
        if (record.data.length > 0) {
          for (let item of record.data) {
            if (item.from === state.user.address) {
              dispatch({
                type: "INSERT_RECORD",
                record: {
                  from: item.from,
                  to: item.to,
                  value: item.value,
                  type: "send",
                },
              });
            } else {
              dispatch({
                type: "INSERT_RECORD",
                record: {
                  from: item.from,
                  to: item.to,
                  value: item.value,
                  type: "receive",
                },
              });
            }
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        dispatch({ type: "RESET_LOADING" });
      }
    };
    fetch();
  }, []);

  return <>{children}</>;
}

export default GetRecord;
