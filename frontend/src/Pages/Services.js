import React from 'react';
import '../CSS/Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Services</h2>
      <p>
        We specialize in innovative software and mobile applications,
        modernizing traditional Equb practices with transparency and reliability.
      </p>
      <div className="service-cards">
        <div className="card">
          <h3>Popular Equb</h3>
          <p>Connect equbtegnas with similar interests and create equbs safely.</p>
        </div>
        <div className="card">
          <h3>Corporate Equb</h3>
          <p>Create equbs exclusively for your workplace community.</p>
        </div>
        <div className="card">
          <h3>Group Equb</h3>
          <p>Create equbs among pre-agreed trusted members.</p>
        </div>
        <div className="card">
          <h3>Inkind Equb</h3>
          <p>Start equbs for goods like phones, TVs, and laptops.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
