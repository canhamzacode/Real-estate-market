import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { privateRoutes, routes } from "./routes/routes";
import PrivateRoute from "./Components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={""}>
        {routes.map((routeEl) => {
          return <Route key={routeEl.key} {...routeEl} />;
        })}
      </Route>
      <Route path="/" element={<AppLayout />}>
        {privateRoutes.map(({ element, ...otherProps }) => (
          <PrivateRoute key={element.key} element={element} {...otherProps} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
