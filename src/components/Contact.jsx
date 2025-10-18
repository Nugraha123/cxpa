import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Mengirim pesan...");

    try {
      const response = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Pesan kamu berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Gagal mengirim pesan, coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Terjadi kesalahan pada server.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Hubungi Kami</h2>
        <p>
          Punya pertanyaan atau ingin bergabung bersama CXPA?  
          Kirimkan pesanmu melalui form di bawah ini!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama kamu"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email kamu"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Pesan</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tulis pesan kamu di sini..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Kirim Pesan
        </button>

        {/* Pesan status */}
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
