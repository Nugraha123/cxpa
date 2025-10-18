import React from "react";
import "./Gallery.css";
import CircularGallery from "./CircularGallery";




function Gallery() {

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2>Gallery Kegiatan</h2>
        <p>
          Dokumentasi berbagai kegiatan CXPA — dari mountaineering, climbing,
          hingga pelatihan survival.
        </p>
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#333" borderRadius={0.05} scrollEase={0.02} />
      </div>

    </section>
  );
}

export default Gallery;
