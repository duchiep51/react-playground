import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import MultiStepsForm from "../components/widgets/MultiStepForm";
import Post from "../views/Post/Post";

const MainRoutes = {
  path: "",
  element: <MainLayout />,
  children: [
    {
      path: "/form/*",
      element: <MultiStepsForm />
    },
    {
      path: "/post/",
      element: <Post />,
      loader: () => {
        console.log('load here')
      }
    },
  ]
};

const AuthRoutes = {
  path: "/auth",
  element: <AuthLayout />,
};

const LogoutRoutes = {
  path: "/logout",
  element: <div>logout</div>,
};

const Routes = () => {
  return useRoutes([MainRoutes, AuthRoutes, LogoutRoutes]);
};

export default Routes;
