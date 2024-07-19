import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './review.css';

const ReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    review: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (!formData.name) {
      errors.push('Name is required.');
    }
    if (!emailRegex.test(formData.email)) {
      errors.push('Invalid Email Address.');
    }
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
      errors.push('Rating must be a number between 1 and 5.');
    }
    if (!formData.review) {
      errors.push('Review is required.');
    }

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    toast.success("Thank you for your review!");

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      rating: '',
      review: ''
    });
  };

  return (
    <div className='mainouter'>
    <section>
      <div className="review-container" data-aos="fade down">
        <div className="reviewInfo">
          <div>
            {/* Review info section */}
          </div>
        </div>
        <div>
        
        </div>
        <div className="reviewForm">
          <p style={{fontSize: '2rem', color: '#0f3959', fontWeight: '500'}}>Loved our site?</p>
          <h2>Leave a Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="formBox">
              <div className="inputBox w100">
              <label>Name</label>
                <input placeholder="Manav Malhotra" type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="inputBox w100">
              <label>Email Address</label>
                <input placeholder="manav@example.com" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="inputBox w100">
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />
                <span>Rating (1-5)</span>
              </div>
              <div className="inputBox w100">
                <label>Your Feedback</label>
                <textarea placeholder="Tell us what you loved about our site" name="review" value={formData.review} onChange={handleChange} required />
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Submit Review" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
    </div>
  );
};
export default ReviewPage;