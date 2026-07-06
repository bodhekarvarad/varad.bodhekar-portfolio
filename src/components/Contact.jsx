import React from "react";

const Contact = () => {
  return (
    <div className="container text-center py-5" style={{ minHeight: "80vh" }}>
      <h1 className="mb-4">Contact</h1>

      <h4 className="text-primary mb-3">
         This page is currently under development.
      </h4>

      <p className="lead">
        I'm working on creating a contact page with a contact form and my
        professional social links.
      </p>

      <p>
        In the meantime, feel free to connect with me on LinkedIn or send me an
        email.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        <a
          href="https://www.linkedin.com/in/varad-bodhekar-050994279/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
        >
          <i className="fa-brands fa-linkedin me-2"></i>
          LinkedIn
        </a>

        <a
          href="mailto:varad.bodhekar@gmail.com"
          className="btn btn-outline-dark btn-lg"
        >
          <i className="fa-regular fa-envelope me-2"></i>
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Contact;