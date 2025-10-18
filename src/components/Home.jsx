import React from "react";
import "./Home.css";
import berandaImage from "../assets/homebg.jpeg"; // ganti dengan nama file kamu


const Home = () => {
  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${berandaImage})` }}
    >
      <div className="home-content">
        <h1>Welcome to CXPA 🌿</h1>
        <p>Tangguh di Alam Keren di Sekolah.</p>
      </div>
    </section>
  );
};

export default Home;
