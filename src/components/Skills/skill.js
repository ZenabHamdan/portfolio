import React from "react";
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';

const Skill = () => {
    return ( 
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I'm a software engineer, passionate frontend developer with experience
                in creating <br /> user-friendly and responsive web applications.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I specialize in UI design, creating intuitive and visually appealing interfaces to enhance user experiences.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I specialize in website design, combining creativity and functionality to craft engaging and user-centric digital experiences.</p>
                    </div>
                </div>
               
            </div>
        </section>
     );
}
 
export default Skill;