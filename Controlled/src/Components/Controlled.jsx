import { useState } from "react";

const Controlled = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    console.log(e.target.value);
    setusername(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      alert("Please fill the form");
    } else {
      alert("Form submitted successfully");
      let personDetails = {
        username: username,
        password: password,
      };
      console.log(personDetails); // optional: to see data
    }
  }; // ✅ properly closed here

  return (
    <div>
      <aside>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="enter the username"
            name="username"
            value={username}
            onChange={handleUsername}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="enter the password"
            name="password"
            value={password}
            onChange={handlePassword}
          />

          <button type="submit">Submit</button>
        </form>
      </aside>
    </div>
  );
};

export default Controlled;