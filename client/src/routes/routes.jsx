import Profile from "../pages/Profile";
import Feed from "../pages/Feed";
import About from "../pages/About";
import Search from "../pages/Search";
import PropertyDetail from "../pages/ProperyDetail";

export const routes = [
  {
    key: "home",
    path: "/",
    element: <Feed />,
  },
  {
    key: "feed",
    path: "/feed",
    element: <Feed />,
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
