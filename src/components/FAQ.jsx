import React, { useState } from "react";
import "./faq.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import faqs from "../components/faqs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="faq-container" data-aos="fade down">
        <h1>Frequently Asked Questions</h1>
        <ul>
          {faqs.map((faq, index) => (
            <li
              className="faq-item"
              key={index}
              onClick={() => handleToggle(index)}
            >
              <div className="faq-header">
                <strong className="faq-question">{faq.question}</strong>
                <FontAwesomeIcon
                  icon={expandedIndex === index ? faMinus : faPlus}
                  className="faq-icon"
                />
              </div>
              <p
                className={`faq-answer ${
                  expandedIndex === index ? "expanded" : ""
                }`}
              >
                {faq.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
