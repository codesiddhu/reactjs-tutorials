import { useState } from "react";
import { authContext } from "../../utilities";
import { baseUrl } from "../../utilities";
let AuthProvider = ({ children }) => {
  let [userDetails, setUserDetails] = useState({
    singleUserData: "",
    loading: false,
  });
  let { loading, singleUserData } = userDetails;
  let addUser = async (data) => {
    try {
      let response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.status === 201) {
        setUserDetails({ ...userDetails, loading: true });
      }
    } catch {
      alert("Something Went Wrong Try After Some Time ");
    }
  };

  let validation = async (data) => {
    try {
      let response = await fetch(`${baseUrl}/users`);
      let responseData = await response.json();

      let singleUser = responseData.find(
        (value) =>
          value.email === data.email && value.password === data.password,
      );

      if (singleUser === undefined) {
        alert("User Not Found");
      } else {
        alert("Login Successful");
        setUserDetails({ ...userDetails, singleUserData: singleUser });
      }
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
  return (
    <authContext.Provider
      value={{ addUser, loading, validation, singleUserData }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;
