import { useEffect } from 'react';
import '../Styles/Services.css';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import webDevImage from '../assets/web.svg';
import appDevImage from '../assets/app.svg';
import digitalMarketingImage from '../assets/dm.svg';
import emailMarketingImage from '../assets/seo.svg';

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleEmailClick = () => {
    const email = 'abcdef@gmail.com';
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1 className="text-center mt-5 display-3 fw-bold">Our <span className="theme-text">Services</span></h1>
        <hr className="mx-auto mb-5 w-25" />
        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={webDevImage} alt="WhatsApp" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">WhatsApp</h3>
                <hr className="mx-auto w-75" />
                <p>
                  WhatsApp provides direct messaging for quick queries and responses. It enables instant contact with customer support for timely assistance. Users receive updates and notifications regarding our services to stay informed.
                </p>
                <a 
                  href="https://wa.me/01234567890" 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Chat with Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={appDevImage} alt="Email" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Email</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Email serves as a formal communication channel for detailed queries. It facilitates documentation and record-keeping of conversations, ensuring comprehensive support and clarity.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={handleEmailClick}
                >
                  Email Us
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={digitalMarketingImage} alt="Support Groups" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Support Groups</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Our Support Groups offer community-based support for shared experiences. They host group discussions and peer support sessions, providing access to resources and expert advice within a supportive community setting.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={emailMarketingImage} alt="Chatbot" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Chatbot</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Our Chatbot offers automated responses for frequently asked questions, ensuring quick initial assistance with basic inquiries. It provides guided navigation to help users find detailed information about our services efficiently.
                </p>
                <a 
                  href="https://emowellbeing.streamlit.app/" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
