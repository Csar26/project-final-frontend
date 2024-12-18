import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Prealoder/Prealoder";
import thirdpartyapi from "../../utils/ThirdPartyApi";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [artistData, setArtistData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    thirdpartyapi.generateToken();
  }, []);

  const handleArtistSearch = (artistQuery) => {
    setIsLoading(true);
    thirdpartyapi.search(artistQuery)
      .then((data) => {
  
        if (data.artists && data.artists.items.length > 0) {
          setArtistData(data.artists.items[0]);
          setError(null);
        } else {
          setError("No artist found");
          setArtistData(null);
        }
      })
      .catch((err) => {
        setError("Error fetching artist data");
        setArtistData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="page">
      <Navigation />
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main 
                  onArtistSearch={handleArtistSearch} 
                  artistData={artistData}
                  error={error}
                />
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