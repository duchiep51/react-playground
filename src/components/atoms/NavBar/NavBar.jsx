import { NavLink } from "react-router-dom";

const MyNavLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-sky-400" : "")}
    >
      {children}
    </NavLink>
  );
};

const NavBar = () => {
  return (
    <div className="w-full flex flex-1 gap-4">
      <MyNavLink to="form">Form</MyNavLink>
      <MyNavLink to="post">Post</MyNavLink>
      <MyNavLink to="auth">Auth</MyNavLink>
      <MyNavLink to="logout">Logout</MyNavLink>
    </div>
  );
};

export default NavBar;
