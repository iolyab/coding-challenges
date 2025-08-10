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
import { DataTableContainer } from "./pages/data table/DataTableContainer";
import { FileExplorer } from "./pages/file explorer/FileExplorer";
import { data } from "./pages/file explorer/data";
import { FlightBooker } from "./pages/flight booker/FlightBooker";
import { LikeButton } from "./pages/like/LikeButton";
import { MainPage } from "./pages/modal dialog/MainPage";

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
          <Route path="/dataTable" element={<DataTableContainer />} />
          <Route path="/fileExplorer" element={<FileExplorer data={data} />} />
          <Route path="/flightBooker" element={<FlightBooker />} />
          <Route path="/likeButton" element={<LikeButton />} />
          <Route path="/mainPage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
