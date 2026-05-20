
import React, { useState } from "react";
import HomePage from "./HomePage";


const Condition = () => {
  let [isLogin, setLogin] = useState(false);

  let loginCheck = (data) => {
    if (data) {
      return <h1>Hello User !</h1>;
    } else {
      return <h1>Login First !</h1>;
    }
  };

  let handleButton = () => {
    setLogin(!isLogin);
  };
  return (
    <div>
      {loginCheck(isLogin)}
      {/* <button onClick={() => setLogin(true)}>Login</button>
      <button onClick={() => setLogin(false)}>Logout</button> */}

      {/* Syntax:- condition ? true block : false Block */}
      <button onClick={handleButton}>{isLogin ? "Logout" : "Login"}</button>

      {/* ! syntax:- condition && true block */}
      {isLogin && <HomePage/>}
    </div>
  );
};

export default Condition;


