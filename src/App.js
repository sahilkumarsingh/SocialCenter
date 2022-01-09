import "./App.css";
import Gitpage from "./Components/Pages/Gitpage";
import HeadDrawer from "./Components/Header/HeadDrawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link, Route, Routes, Fade, Navigate } from "react-router-dom";

const theme = createTheme({});

function App() {
  return (
    <div id="app">
      <HeadDrawer />;
      <Routes>
        <Route path="/" element={<Navigate replace to="/GitHub" />} />
        <Route path="/GitHub" element={<Gitpage />} />
      </Routes>
    </div>
  );
}

export default App;
