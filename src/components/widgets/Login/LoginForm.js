import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleUserChange = (field) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  console.log("user", user);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={user.name}
        //   onChange={handleUserChange("name")}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={handleUserChange("password")}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;
