import classes from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/nav/Navbar";
import Home from "./pages/home/Home";
import { Counter } from "./pages/counter/Counter";
import { String } from "./pages/string/String";
import { Merge } from "./pages/merge/Merge";
import { Accordion } from "./pages/accordion/Accordion";
import { ContactForm } from "./pages/contact/ContactForm";
import { HolyGrail } from "./pages/holy-grail/HolyGrail";
import { ProgressBar } from "./pages/progress bar/ProgressBar";
import { MortgageCalculator } from "./pages/mortgage/MortgageCalculator";
import { Tabs } from "./pages/tabs/Tabs";

function App() {
  return (
    <div className={classes.layout}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/string" element={<String />} />
          <Route path="/merge" element={<Merge />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/holyGrail" element={<HolyGrail />} />
          <Route path="/progressBar" element={<ProgressBar />} />
          <Route path="/mortgageCalculator" element={<MortgageCalculator />} />
          <Route path="/tabs" element={<Tabs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
