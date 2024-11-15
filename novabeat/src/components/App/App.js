import About from "../About/About";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Prealoder/Prealoder";
import api from "../../utils/api";
import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
