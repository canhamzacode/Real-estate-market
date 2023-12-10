import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import AppLayout from "./Components/AppLayout";
import ProperyDetail from "./pages/ProperyDetail";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import MapPage from "./pages/MapPage";
import ImageUpload from "./Components/ImageUpload";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/property/:id" element={<ProperyDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/image-upload" element={<ImageUpload />} />
      </Route>
    </Routes>
  );
}

export default App;
