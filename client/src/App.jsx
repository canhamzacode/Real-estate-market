import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Sucess from "./pages/Sucess";
import Feed from "./pages/Feed";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Sucess />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
