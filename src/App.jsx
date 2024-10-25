import Home from "./pages/home/Home";
import "./style/dark.scss";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {darkMode} = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  
  const NotRequireAuth = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RequireAuth><Home /></RequireAuth>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
