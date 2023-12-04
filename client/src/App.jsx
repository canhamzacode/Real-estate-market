import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Sucess from "./pages/Sucess";
import Feed from "./pages/Feed";
import AppLayout from "./Components/AppLayout";
import ProperyDetail from "./pages/ProperyDetail";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Sucess />} />
      <Route element={<AppLayout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/property/:id" element={<ProperyDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search/:id" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
