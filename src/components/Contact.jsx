import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
  console.error("EmailJS Error:", error);

  alert(
    `Failed!\nStatus: ${error?.status}\nText: ${error?.text || error?.message}`
  );
}

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-hero">
        <div className="container text-center">
          <span className="badge-contact">GET IN TOUCH</span>

          <h1>
            Let's Connect <span>With Me!</span>
          </h1>

          <p>
            Have a project in mind or want to collaborate?
            Feel free to reach out. I'll get back to you as soon as possible!!!
          </p>
        </div>
      </div>

      <div className="container contact-wrapper">
        <div className="row g-4">

      
          <div className="col-lg-4">
            <div className="contact-card">

              <h3>Contact Information</h3>

              <div className="info">
                <strong>Email</strong>
                <p>varad.bodhekar@gmail.com</p>
              </div>

              <div className="info">
                <strong>Location</strong>
                <p>Maharashtra, India</p>
              </div>

              <div className="social-links">

                <a
                  href="https://www.linkedin.com/in/varad-bodhekar-050994279"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a
                  href="https://github.com/bodhekarvarad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="https://instagram.com/varadb.28"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>

              </div>

            </div>
          </div>

       

          <div className="col-lg-8">

            <div className="form-card">

              <h3>Send Me A Message</h3>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <input
                  type="text"
                  name="subject"
                  className="form-control mb-3"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <textarea
                  rows="6"
                  name="message"
                  className="form-control mb-3"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button
                  type="submit"
                  className="btn send-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}