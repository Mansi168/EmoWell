import React, { useState } from 'react';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    let errors = [];

    if (!formData.firstName) {
      errors.push('First Name is required.');
    }
    if (!formData.lastName) {
      errors.push('Last Name is required.');
    }
    if (!emailRegex.test(formData.email)) {
      errors.push('Invalid Email Address.');
    }
    if (!mobileRegex.test(formData.mobileNumber)) {
      errors.push('Invalid Mobile Number (10 digits only).');
    }
    if (!formData.message) {
      errors.push('Message is required.');
    }

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

   toast.success("All fields are correctly formatted")
  };

  return (
    <section>
      <div className="contact-container" data-aos="fade down">
        <div className="contactInfo">
          <div>
            {/* Contact info section */}
          </div>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required/>
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea name="message" value={formData.message} onChange={handleChange} required />
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
