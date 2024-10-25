import Home from "./pages/home/Home";
import "./style/dark.scss";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
