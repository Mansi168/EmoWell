import './contact.css';

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contactInfo">
          <div>

           
          </div>
          
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea required />
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;