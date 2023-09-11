import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Store from "./components/Store/Store";
import ShowMore from "./components/Store/ShowMore";
import reportWebVitals from "./reportWebVitals";
import News from "./components/News";
import Events from "./components/Events";
import Artist from "./components/Art/Artist";
import About from "./components/About";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/store/showMore" element={<ShowMore />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/artist" element={<Artist />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
