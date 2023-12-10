import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { privateRoutes, routes } from "./routes/routes";
import RequireAuth from "./Components/RequireAuth";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        {routes.map((routeEl) => {
          return <Route key={routeEl.key} {...routeEl} />;
        })}
      </Route>

      <Route path="/" element={<AppLayout />}>
        {privateRoutes.map(({ element, ...otherProps }) => (
          <Route
            key={element.key}
            element={<RequireAuth>{element}</RequireAuth>}
            {...otherProps}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
