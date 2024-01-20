import React from "react";
import './portfolio.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Video1 from '../../assets/video1.mp4';
import Video2 from '../../assets/video2.mp4';
import Portfolio2 from '../../assets/portfolio-2.png';

const Portfolio = () => {
    return ( 
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I'm a software engineer, passionate frontend developer with experience in creating
            user-friendly and responsive web applications.</span>
            <p className="note">please click on the image to see a video!!</p>
            <div className="worksImgs">
                <a href={Video1}>
                    <img src={Portfolio1} alt="" className="worksImg"/>
                </a>
                <a href={Video2}>
                    <img src={Portfolio2} alt="" className="worksImg"/>
                </a>
            </div>
            
        </section>
     );
}
 
export default Portfolio;