import React from "react";
import "./About.css";
import aboutImg from "../assets/cxpa.png";

const activities = [
  {
    title: "Mountaineering",
    description:
      "CXPA setiap tahun mengadakan kegiatan pendakian CXPA mengadakan kegiatan mountaineering untuk melatih ketahanan fisik dan mental anggota, sekaligus mengasah kemampuan navigasi di medan pegunungan.",
  },
  {
    title: "Climbing",
    description:
      "Kegiatan panjat tebing menjadi salah satu latihan utama CXPA untuk mengasah tali-temali, kekuatan, fokus, dan kerja sama tim dalam menghadapi tantangan alam.",
  },
  {
    title: "Pelatihan Survival",
    description:
      "Anggota CXPA dilatih keterampilan bertahan hidup di alam bebas, mulai dari navigasi, pertolongan pertama, hingga manajemen peralatan.",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <img src={aboutImg} alt="CXPA Logo" className="about-logo" />
        <h2>Tentang CXPA</h2>
        <p>
          CXPA adalah Organisasi pecinta alam yang
          berfokus pada kegiatan eksplorasi, konservasi, dan edukasi lingkungan.
        </p>
      </div>

      <div className="card-container">
        {activities.map((item, index) => (
          <div className="activity-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
