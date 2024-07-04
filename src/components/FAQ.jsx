import React, { useState } from 'react';
import "./faq.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <Navbar/>
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <ul>
                    <li className="faq-item" onClick={() => handleToggle(0)}>
                        <strong className="faq-question">What is Emowell?</strong>
                        <p className={`faq-answer ${expandedIndex === 0 ? 'expanded' : ''}`}>
                            Emowell is a web application focused on enhancing emotional wellbeing and managing mental health. It offers features like a chatbot, relaxation games, a reading area with mental health resources, and a community forum.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(1)}>
                        <strong className="faq-question">How can I use the Chatbot?</strong>
                        <p className={`faq-answer ${expandedIndex === 1 ? 'expanded' : ''}`}>
                            The Chatbot is available to engage in conversations about mental health. You can seek advice, support, and coping strategies for managing emotions and challenges.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(2)}>
                        <strong className="faq-question">What types of games are available in the Games Section?</strong>
                        <p className={`faq-answer ${expandedIndex === 2 ? 'expanded' : ''}`}>
                            The Games Section offers a variety of relaxation games designed to reduce stress and improve mood. You can choose games from different categories based on your preferences.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(3)}>
                        <strong className="faq-question">What resources are available in the Reading Area?</strong>
                        <p className={`faq-answer ${expandedIndex === 3 ? 'expanded' : ''}`}>
                            The Reading Area provides curated articles, guides, and tips related to mental health and emotional wellbeing. It's a valuable resource for maintaining good mental health.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(4)}>
                        <strong className="faq-question">How can I participate in the Community Forum?</strong>
                        <p className={`faq-answer ${expandedIndex === 4 ? 'expanded' : ''}`}>
                            You can participate in the Community Forum by joining discussions with peers and professionals about mental health topics. Share your experiences, ask questions, and provide support to others in the community.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(5)}>
                        <strong className="faq-question">Is Emowell free to use?</strong>
                        <p className={`faq-answer ${expandedIndex === 5 ? 'expanded' : ''}`}>
                            Yes, Emowell is free to use for all users. Simply create an account to access all the features and resources available on the platform.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(6)}>
                        <strong className="faq-question">How can I contact support for technical issues?</strong>
                        <p className={`faq-answer ${expandedIndex === 6 ? 'expanded' : ''}`}>
                            If you encounter technical issues or need assistance, you can contact our support team at support@emowell.com or through the Contact page on the website.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(7)}>
                        <strong className="faq-question">Can I access Emowell from mobile devices?</strong>
                        <p className={`faq-answer ${expandedIndex === 7 ? 'expanded' : ''}`}>
                            Yes, Emowell is designed to be accessible from both desktop and mobile devices. You can use the web application seamlessly across different platforms.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(8)}>
                        <strong className="faq-question">Are my personal details secure on Emowell?</strong>
                        <p className={`faq-answer ${expandedIndex === 8 ? 'expanded' : ''}`}>
                            Emowell takes user privacy seriously. Your personal details are encrypted and stored securely. We follow industry standards to protect your information.
                        </p>
                    </li>
                    <li className="faq-item" onClick={() => handleToggle(9)}>
                        <strong className="faq-question">Can I delete my Emowell account?</strong>
                        <p className={`faq-answer ${expandedIndex === 9 ? 'expanded' : ''}`}>
                            Yes, you can delete your Emowell account at any time. Visit your account settings page to find the option for account deletion.
                        </p>
                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    );
}

export default FAQ;
