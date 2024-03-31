import Card from "./Card";
import "./Game.css";
import candy from "/candy.jpg";
import Forest from "/Forest.jpg";
import Stress from "/Stress.jpg";
import Burger from "/Burger.png";
import Cream from "/Cream.png";

const Game = () => 
{
    return(
        <>
        <h1 className="skill-head" id="event">Explore Games</h1>
        {/* <h4 className="skill-subhead">tentative dates for all are 21st March to 30th March</h4> */}
        
        <div className="project-container">
        <Card image={candy} head="Candy Bubble" content="Candy Bubble Games brings to you a never-ending adventure with infinite bubbles and fun." link="https://gameforge.com/en-US/littlegames/candy-bubble/" event=" FILTER FIESTA: Get ready to unleash your creativity and immerse yourself in the world of AR-VR filters! " date="March 21st-30th, 2024"/>
        <Card image={Forest} head="Forest Mania" content="FOREST MANIA is the latest and newest in ACCUMULATIVE “Match 3” puzzles! Swap and match many cute and cuddly forest animals to gain points.  " link="https://gameforge.com/en-US/littlegames/forest-mania/" event="DOODLE CRAFT: Unleash your creativity as we embark on a nostalgic journey with our `Back to the Past Y2K` theme." date="March 21st-30th, 2024"/>
        <Card image={Stress} head="Anti Stress Game" content="When you need relaxation, diversion or just a moment of distraction enjoy this Game" link="https://gameforge.com/en-US/littlegames/anti-stress-game/" event="TECHSCRIBE: Explore the realms of the apps of the next decade and how they intertwine with Google technologies! 🌐 " date="March 21st-30th, 2024"/>
        </div>
        <div className="project-container">
        <Card image={Burger} head="Top Burger" content="Top Burger is an exciting fast food simulation game. You just opened a burger restaurant, let's see if you can put together burgers fast enough to satisfy" link="https://gameforge.com/en-US/littlegames/top-burger/" event="GEMINI GENESIS: Exciting event where your creativity and expertise can shape the future of Gemini AI!" date="March 21st-30th, 2024"/>
        <Card image={Cream} head="Perfect Cream" content="Is perfect topping an easy task for you? Master the controls and try to prove everyone who is the chef in Perfect Cream! " link="https://gameforge.com/en-US/littlegames/perfect-cream/" event="Hack 'N' Solve: Exciting event where your creativity and expertise can shape the future of Gemini AI!" date="March 21st-30th, 2024"/>
        </div>
        </>
    )
}
export default Game;

