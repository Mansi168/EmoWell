import React, { useState } from 'react';
import './review.css';

const FeedbackModal = () => {
  const [rating, setRating] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [customFeedback, setCustomFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackOption, setFeedbackOption] = useState("");

  const handleFeedbackOptionChange = (e) => {
    const selectedOption = e.target.value;
    setFeedbackOption(selectedOption);
    if (selectedOption === "Other") {
      setCustomFeedback("");
    } else {
      setFeedback(selectedOption);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value === rating ? null : value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleCustomFeedbackChange = (e) => {
    setCustomFeedback(e.target.value);
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    alert("Thank you for your feedback!");

    // Reset form fields
    setRating(null);
    setName("");
    setEmail("");
    setFeedback("");
    setCustomFeedback("");
    setFeedbackOption("");
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-form">
        <div>
          <h2>Your Insights Matter to Us !</h2>
         <hr />
<p className="para">
    EmoWell is here to assist with your emotional wellbeing. <br />
    Share your feedback and suggestions to help us enhance our service.
</p>

          <div>
            <p className="rate-para">
              Rate Your Experience
            </p>
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={value <= rating ? "active" : ""}
                  onClick={() => handleRatingChange(value)}
                >
                  {value <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Type your name here..."
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email..."
              required
            />
            <label htmlFor="feedback-option">Feedback</label>
            <select
              id="feedback-option"
              name="feedback-option"
              value={feedbackOption}
              onChange={handleFeedbackOptionChange}
              required
            >
              <option value="" disabled>Select your feedback</option>
              <option value="Excellent experience">Excellent experience</option>
              <option value="Good, but could be improved">Good, but could be improved</option>
              <option value="Average experience">Average experience</option>
              <option value="Poor experience">Poor experience</option>
              <option value="Other">Other</option>
            </select>
            {feedbackOption === "Other" && (
              <textarea
                id="custom-feedback"
                name="custom-feedback"
                rows="4"
                value={customFeedback}
                onChange={handleCustomFeedbackChange}
                placeholder="Let us know your thoughts, suggestions, or concerns..."
                required
              ></textarea>
            )}
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
