import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Sucess from "./pages/Sucess";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Sucess />} />
    </Routes>
  );
}

export default App;
