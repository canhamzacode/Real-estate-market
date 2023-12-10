import Profile from "../pages/Profile";
import Feed from "../pages/Feed";
import About from "../pages/About";
import Search from "../pages/Search";
import PropertyDetail from "../pages/ProperyDetail";
import Login from "../pages/Login";

export const routes = [
  {
    key: "feed",
    path: "/",
    element: <Feed />,
  },
  {
    key: "login-page",
    path: "/login",
    element: <Login />,
  },
  {
    key: "about",
    path: "/about",
    element: <About />,
  },
  {
    key: "search",
    path: "/search/:id",
    element: <Search />,
  },
  {
    key: "property-data",
    path: "/property/:id",
    element: <PropertyDetail />,
  },
];

export const privateRoutes = [
  {
    key: "profile-page",
    path: "/profile",
    element: <Profile />,
  },
];
