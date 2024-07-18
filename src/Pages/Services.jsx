import { useEffect } from 'react';
import '../Styles/Services.css';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import webDevImage from '../assets/web.svg';
import appDevImage from '../assets/app.svg';
import digitalMarketingImage from '../assets/dm.svg';
import emailMarketingImage from '../assets/seo.svg';

const handleEmailClick = () => {
  const email = 'abcdef@gmail.com';
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
};

const serviceData = [
  {
    name :"WhatsApp",
    image : webDevImage,
    text : "WhatsApp provides direct messaging for quick queries and responses. It enables instant contact with customer support for timely assistance. Users receive updates and notifications regarding our services to stay informed.",
    method : ()=> window.open("https://wa.me/01234567890","_blank")
  },
  {
    name: "Email",
    image : appDevImage,
    text : "Email serves as a formal communication channel for detailed queries. It facilitates documentation and record-keeping of conversations, ensuring comprehensive support and clarity.",
    method : ()=> handleEmailClick()
  },
  {
    name: "Support Group",
    image : digitalMarketingImage,
    text : "Our Support Groups offer community-based support for shared experiences. They host group discussions and peer support sessions, providing access to resources and expert advice within a supportive community setting.",
    method : ()=> window.open("/contact")
  },
  {
    name : "Chatbot",
    image : emailMarketingImage,
    text : "Our Chatbot offers automated responses for frequently asked questions, ensuring quick initial assistance with basic inquiries. It provides guided navigation to help users find detailed information about our services efficiently.",
    method : ()=> window.open("https://emowellbeing.streamlit.app/","_blank")
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Moved this fun to top
   * No use here , u can remove this
   * Im not removing this right now
   */
  // const handleEmailClick = () => {
  //   const email = 'abcdef@gmail.com';
  //   window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  // };

  return (
    <>
      <Navbar />
      <div className="">
        <h1 className="text-center mt-5 display-3 fw-bold">Our <span className="theme-text">Services</span></h1>
        <hr className="mx-auto mb-5 w-25 " />

        <section className={"m-0 p-0 w-100 d-flex flex-wrap gap-2"} >

          {
            serviceData.map((data,index)=>{
              return (
                  <>
                    <div className={"card border border-success bg-white"}
                         style={{maxWidth: "400px", minHeight: "500px", cursor: "default"}}>
                      <div className={"card-body d-flex flex-column justify-content-start w-100 p-0 m-0"}>
                        <h3 className={"m-0 mb-4 fw-bold"}>{data.name}</h3>
                        <div className={"rounded"} style={{width: "100%", height: "200px", overflow: "hidden"}}>
                          <img src={data.image} alt="WhatsApp" className="w-100 h-100"
                               style={{objectFit: "cover", objectPosition: "center"}}/>
                        </div>
                        <div className={"d-flex flex-grow-1 flex-column gap-2 h-100 w-100"}>
                          <p className={"text-secondary text-center mt-3"} style={{fontSize:"15px"}}>
                            {data.text}
                          </p>
                          <button
                              className={"btn btn-outline-success mt-auto btn-lg "}
                              onClick={() => data.method() }
                          >
                            Chat with us
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
              )
            })
          }
        </section>

        {/*
        <div className="row">

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
            // <div className="card shadow">
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
         */ }
      </div>
      <Footer />
    </>
  );
};

export default Services;
