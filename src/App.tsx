import classes from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/nav/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className={classes.layout}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
