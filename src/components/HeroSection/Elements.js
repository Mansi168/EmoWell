import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    text-align: left; /* Adjusted to align text to the left */
    height: 120vh;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 480px) {
        height: 80vh;
    }


    // :before{
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
    //     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    //     z-index: 2;
    // }
`

export const HeroBg = styled.div`
    // height:1500px;
    position: absolute;
    top: 0;
    right: 0 ;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 480px){
        background: #000;
    }
   
`

export const Imgbg = styled.div`
    object-fit: cover;
    margin-right: 0px;
    top: -770.06px;
    position: absolute;

    left: 154.28px;

    
   
`

export const HeroContent = styled.div`
    z-index: 3;
    width: auto;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const HeroH1 = styled.h1`
  text-align:center;
  margin-bottom: 50px;
  font-family: 'Exo 2', sans-serif;
  color: #00008B;
  font-style: normal;
  font-size: 34px;
  line-height: normal;
  font-weight: 600;
  color: white;
  position: relative;
  display: inline-block;

  &:before {
    content: '';
    display: block;
    width: 50%;
    height: 100%;
    shape-outside: ellipse(50% 100% at 0% 50%);
    float: left;
  }

  &:after {
    content: '';
    display: block;
    width: 50%;
    height: 100%;
    shape-outside: ellipse(50% 100% at 100% 50%);
    float: right;
  }

  @media screen and (max-width: 768px) {
    font-size: 50px;
    font-weight: 600;
  }

  @media screen and (max-width: 480px) {
    font-size: 43px;
    font-weight: 600;
  }
`;


export const HeroD = styled.span`
    color: #FFC640;
    //font-family: 'Poppins', sans-serif;
    font-family: 'Exo 2', sans-serif;
font-style: normal;
`
export const HeroP = styled.p`
  width: 100%;
  max-width: 640px;
  margin-top: 1.5rem;
  box-sizing: border-box;
  font-family: Georgia;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 33px;
  text-align: left;
  background: indigo;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
 /* text-transform:uppercase; */
 text-align:center;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 22px;
  }
`;


export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    // background: radial-gradient(50% 50% at 50% 50%, #FFC640 47.4%, #F2AF13 100%);

`

export const Heroimg = styled.img`
height:40px;
margin-right: 10px;
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

@media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
  
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const CubeWrapper = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%, -50%);
    width: 180px;
    height: 150px;
    perspective: 800px;
    transition: transform 1s;
    pointer-events: none;

    .cube {
        width: 120px;
        height: 120px;
        position: relative;
        transform-style: preserve-3d;
        animation: spin 9s linear infinite; /* Add this animation */
    }
  
  .cube-side {
    width: 110%;
    height: 110%;
    position: absolute;
    border: 2px solid #ffc640;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    transform-style: preserve-3d;
  }

  
  .cube-side.front {
    transform: translateZ(85px);
  }
  .cube-side.back {
    transform: rotateX(180deg) translateZ(85px);
  }
  .cube-side.right {
    transform: rotateY(-90deg) translateZ(85px);
  }
  .cube-side.left {
    transform: rotateY(90deg) translateZ(85px);
  }
  .cube-side.top {
    transform: rotateX(-90deg) translateZ(85px);
  }
  .cube-side.bottom {
    transform: rotateX(90deg) translateZ(85px);
  }

    @media screen and (max-width: 768px) {
        top: 85%; 
    }

    @media screen and (max-width: 480px) {
        top: 85%; 
    }
  
  @keyframes spin {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }

`;


// social media links
export const SocialIcons = styled.div`
 padding: 4rem 0rem;
 margin-left: 10px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 150px;
 z-index: 2;
`

export const SocialIconsLink = styled.a`
 color: #fff;
 z-index: 2;
 font-size: 36px;
 &:hover{
  color:#ffc640;
  transition: 0.3s ease-out;
}
`