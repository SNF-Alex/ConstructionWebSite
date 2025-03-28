const ContactPage = () => {
    return (
      <>
        {/* Contact Hero Section */}
        <section className="hero contact-hero">
          <div className="container">
            <h2>Get in Touch</h2>
            <p>We're here to answer your questions and discuss your project needs.</p>
          </div>
        </section>
  
        {/* Contact Information Section */}
        <section className="contact-info">
          <div className="container">
            <h2>Contact Information</h2>
            {/* Replace with actual contact details */}
            <div className="info-cards">
              <div className="card"><h3>Address</h3><p>123 Main St, Largo, FL 33770</p></div>
              <div className="card"><h3>Phone</h3><p>(727) 123-4567</p></div>
              <div className="card"><h3>Email</h3><p>info@JPAContractorsInc.com</p></div>
            </div>
          </div>
        </section>
  
        {/* Contact Form Section */}
        {/* Add form functionality */}
      </>
    );
  };
  
  export default ContactPage;