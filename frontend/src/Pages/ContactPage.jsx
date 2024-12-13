import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../CSS/ContactPage.css"; // Assuming you add styles in this CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending form data via EmailJS
    emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "wondfrawte@gmail.com", // Ensure this matches your EmailJS template
        },
        "YOUR_USER_ID" // Replace with your EmailJS public key
      )      
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Partners Section */}
      <section className="partners-section">
        <h2>Our Partners</h2>
        <ul className="partners-list">
          <li>
            <img src="/path-to-partner1-logo.png" alt="Partner 1" className="partner-logo" />
            <p>Partner 1</p>
          </li>
          <li>
            <img src="/path-to-partner2-logo.png" alt="Partner 2" className="partner-logo" />
            <p>Partner 2</p>
          </li>
          <li>
            <img src="/path-to-partner3-logo.png" alt="Partner 3" className="partner-logo" />
            <p>Partner 3</p>
          </li>
          <li>
            <img src="/path-to-partner4-logo.png" alt="Partner 4" className="partner-logo" />
            <p>Partner 4</p>
          </li>
        </ul>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <h2>Our Location</h2>
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps?q=9.016315779455635,38.76861605278671&hl=es;z=14&output=embed"
          className="location-map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter Subject"
            />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
