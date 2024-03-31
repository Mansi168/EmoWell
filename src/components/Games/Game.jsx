import Card from "./Card";
import "./Game.css";
import filter from "/Filter.png";
import doodle from "/Doodlecraft.png";
import techscribe from "/Techscribe.png";
import gemini from "/Gemini.png";
import hacknsolve from "/Hacknsolve.png";

const Game = () => 
{
    return(
        <>
        <h1 className="skill-head" id="event">Events DEVCATION 24</h1>
        {/* <h4 className="skill-subhead">tentative dates for all are 21st March to 30th March</h4> */}
        
        <div className="project-container">
        <Card image={filter} head="FILTER FIESTA" content="Join the Filter Fiesta with GDSC IGDTUW! 🎉 Share your innovative submissions and join us for a fun-filled celebration of digital creativity. The theme is back to the past!" link="https://forms.gle/TxU5zH7wQR9phabP6" event=" FILTER FIESTA: Get ready to unleash your creativity and immerse yourself in the world of AR-VR filters! " date="March 21st-30th, 2024"/>
        <Card image={doodle} head="DOODLE CRAFT" content="Unleash your creativity as we embark on a nostalgic journey with our `Back to the Past Y2K` theme.  🌟 Let your imagination run wild and design a doodle that echoes the essence of the good old days. 🚀 " link="https://forms.gle/u1XkARo2aEHDrCHv6" event="DOODLE CRAFT: Unleash your creativity as we embark on a nostalgic journey with our `Back to the Past Y2K` theme." date="March 21st-30th, 2024"/>
        <Card image={techscribe} head="TECHSCRIBE" content="App development projects. Immerse yourself in a rich tech stack, and contribute to building innovative mobile applications. Elevate your skills while leaving a lasting impact on the world of mobile technology." link="https://forms.gle/5gCtk6j231HxFnzG9" event="TECHSCRIBE: Explore the realms of the apps of the next decade and how they intertwine with Google technologies! 🌐 " date="March 21st-30th, 2024"/>
        </div>
        <div className="project-container">
        <Card image={gemini} head="GEMINI GENESIS" content="We invite you to redesign the given interface using the latest technology stacks of your choice via prompting (from HTML CSS to Tailwind), but deploy it on Replit only. 🌟" link="https://forms.gle/1e6SQcpTDU4bZv5TA" event="GEMINI GENESIS: Exciting event where your creativity and expertise can shape the future of Gemini AI!" date="March 21st-30th, 2024"/>
        <Card image={hacknsolve} head="Hack 'N' Solve" content="Join the excitement of Hack 'N' Solve at Devcation'24! Dive into a dynamic hackathon hosted by Google Developer Student Clubs - IGDTUW, where innovation meets diversity in TechForGood." link="https://devcation-24.devfolio.co/overview" event="Hack 'N' Solve: Exciting event where your creativity and expertise can shape the future of Gemini AI!" date="March 21st-30th, 2024"/>
        </div>
        </>
    )
}
export default Game;

