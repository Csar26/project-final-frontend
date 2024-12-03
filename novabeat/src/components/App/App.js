import About from "../About/About";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Prealoder/Prealoder";
import thirdpartyapi from "../../utils/ThirdPartyApi";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Link, Routes } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [artistData, setArtistData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    thirdpartyapi.generateToken();
   // fetchArtist();
  }, []);

  return (
    <div className="page">
      <Navigation />
      {isLoading ? 
      (
      <Preloader />
    ) :( 

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
      )}
      <Footer />
    </div>
  );
}

export default App;
