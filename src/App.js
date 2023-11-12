import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import ListMovie from "./pages/ListMovie";
import DetailFilm from "./pages/DetailFilm";
import Profile from "./pages/Profile";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function Loading() {
  const navigate = useNavigate(); // Pindahkan useNavigate ke dalam komponen Loading

  // Menggunakan useEffect untuk menunggu sejenak sebelum melakukan pengalihan
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/ListMovie'); // Melakukan pengalihan ke halaman /ListMovie setelah beberapa detik
    }, 2000); // Atur waktu penundaan (dalam milidetik) sesuai kebutuhan
    return () => clearTimeout(timer); // Membersihkan timer jika komponen dibongkar
  }, [navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/ListMovie" element={<ListMovie />} />
          <Route path="/detail/:id" element={<DetailFilm />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
