import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import { AuthContextProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

function RequireAuth({ children }: { children: JSX.Element }) {
  let { authenticated } = useAuth();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}
