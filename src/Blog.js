import React from 'react';
import "./Blog.css";
import { useHistory } from "react-router-dom";

function Blog() {

    const history = useHistory();

    const handleClick = () => {
        history.push("/Blog2");
    }

    return (
        <div className="blog">
            <div className="firstOf__first__blog">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDWN-XbPW-LBDrGB8HPvnFydO4nvTG8A2iw&usqp=CAU"/>
              <h2> Should Twitter Get Rid of Follower Counts? </h2>
              <p> The possibility feels closer than ever </p>
              <p className="para__first"> Cool Neha in All Things Creative </p>
              <p className="para__second"> Jan 9 · 5 min read </p>
            </div>

            <div className="secondOf__first__blog">
               <div className="part1">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRly1TXc0ReEpkwJJmHFq-QvPfTk5IuFRVDnA&usqp=CAU"/>
                  <p> Html, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on WWW pages. </p>
               </div>

               <div className="part1">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvjbSwttVcUp9ujBl16iGLxvwXenr00m_3g&usqp=CAU"/>
                  <p> CSS describes how HTML elements are to be displayed on screen, paper, or in other media & control the layout of multiple web pages. </p>
               </div>

               <div className="part1">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkRw8JFHEWCDrr5bk0Wj_xdS-08qcg7hVgQ&usqp=CAU"/>
                  <p> Teach yourself the foundations of designing using these links made for learning.--freecodecamp & theodinproject </p>
               </div>
               
            </div>

            <div className="thirdOf__first__blog">
                <img src="https://i.pinimg.com/originals/0f/e5/22/0fe52273a933fd2b98c1def8e8e3db9a.jpg"/>
                <h2> No, That’s Not How You Say It </h2>
                <p className="heading">A short personal history of my favorite fast food</p>
                <p className="read__more" onClick={handleClick}> (Read more... ) </p>
                <p className="para__first"> VIP Singh </p>
                <p className="para__second"> Jan 29 · 8 min read </p>
            </div>
        </div>
    )
}

export default Blog;
