import { useEffect, useContext } from "react";
import axios from "axios";

import DispatchContext from "../../context/DispatchContext";

function GetContact({ children }) {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch({ type: "RESET_CONTACT" });
        dispatch({ type: "SET_LOADING" });
        const contact = await axios.get("/users/contact", {
          withCredentials: true,
        });
        if (contact.data.length > 0) {
          for (let item of contact.data) {
            dispatch({
              type: "INSERT_CONTACT",
              contact: {
                friendUsername: item.friend_username,
                address: item.address,
              },
            });
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        dispatch({ type: "RESET_LOADING" });
      }
    };
    fetch();
  }, [dispatch]);

  return <>{children}</>;
}

export default GetContact;
