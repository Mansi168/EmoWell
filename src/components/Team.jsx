
import contributor from "../assets/contributor.jpeg";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; 
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Team.css";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--title-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const Team = () => {
  return (
    <section className="decoration section bd-container items-center justify-center" style={{marginLeft:"150px"}} id="team">
          <Title>Our Team</Title>
          <div className="decoration__container bd-grid team-grid items-center">
            <div className="decoration__data team_data">
              <img src={contributor} alt="" className="decoration__img" id="team_render" />
              <h3 className="decoration__title">Aanaya Jain</h3>
              <p>I transform challenges into digital solutions and development is my escape💡✨</p>
              <br />
              <div className="social">
                <a href="" className="leftLink"><FontAwesomeIcon icon={faLink}/></a>
                <a href="https://instagram.com" ><FontAwesomeIcon icon={faInstagram} className="Social-link Insta"/></a>
                <a href="https://twitter.com" ><FontAwesomeIcon icon={faTwitter} className="Social-link Twit"/></a>
                <a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebook} className="Social-link Face"/></a>
                <a href="https://linkedin.com" ><FontAwesomeIcon icon={faLinkedin} className="Social-link Link" /></a> 
              </div>
            </div>
            <div className="decoration__data team_data">
              <img src="https://res.cloudinary.com/dzy4r0fgy/image/upload/v1687075071/WhatsApp_Image_2023-06-18_at_1.24.29_PM_d7tjzm.jpg" alt="" className="decoration__img" id="team_render" />
              <h3 className="decoration__title">Sneha Chauhan</h3>
              <p>Empowering Minds, Elevating Lives: The Optimistic Developer</p>
              <br /><br />
              <div className="social">
                <a href="" className="leftLink"><FontAwesomeIcon icon={faLink}/></a>
                <a href="https://instagram.com" ><FontAwesomeIcon icon={faInstagram} className="Social-link Insta"/></a>
                <a href="https://twitter.com" ><FontAwesomeIcon icon={faTwitter} className="Social-link Twit"/></a>
                <a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebook} className="Social-link Face"/></a>
                <a href="https://linkedin.com" ><FontAwesomeIcon icon={faLinkedin} className="Social-link Link" /></a> 
              </div>
            </div>
            <div className="decoration__data team_data">
              <img src="https://res.cloudinary.com/damtnzoo8/image/upload/v1707666653/WhatsApp_Image_2024-02-11_at_21.15.46_2c42b767_qmyiip.jpg" alt="" className="decoration__img" id="team_render" />
              <h3 className="decoration__title">Monalika Patnaik</h3>
              <p>With the Heart of a Problem Solver, I meticulously craft Real-World Solutions that make a difference &#128161;&#x2728;</p>
              <div className="social">
                <a href="" className="leftLink"><FontAwesomeIcon icon={faLink}/></a>
                <a href="https://instagram.com" ><FontAwesomeIcon icon={faInstagram} className="Social-link Insta"/></a>
                <a href="https://twitter.com" ><FontAwesomeIcon icon={faTwitter} className="Social-link Twit"/></a>
                <a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebook} className="Social-link Face"/></a>
                <a href="https://linkedin.com" ><FontAwesomeIcon icon={faLinkedin} className="Social-link Link" /></a> 
              </div>
            </div>
            <div className="decoration__data team_data">
              <img src="https://res.cloudinary.com/damtnzoo8/image/upload/v1707666645/WhatsApp_Image_2024-02-11_at_21.13.13_b67c8edb_ffgm76.jpg" alt="" className="decoration__img" id="team_render" />
              <h3 className="decoration__title">Mansi</h3>
              <p>I think creatively to build sustainable technological solutions! &#128176;</p>
              <br /><br />
              <div className="social">
                <a href="" className="leftLink"><FontAwesomeIcon icon={faLink}/></a>
                <a href="https://instagram.com" ><FontAwesomeIcon icon={faInstagram} className="Social-link Insta"/></a>
                <a href="https://twitter.com" ><FontAwesomeIcon icon={faTwitter} className="Social-link Twit"/></a>
                <a href="https://facebook.com" ><FontAwesomeIcon icon={faFacebook} className="Social-link Face"/></a>
                <a href="https://linkedin.com" ><FontAwesomeIcon icon={faLinkedin} className="Social-link Link" /></a> 
              </div>
            </div>
          </div>
        </section>
  )
}

export default Team