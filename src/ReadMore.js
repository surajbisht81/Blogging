import React from 'react'
import "./ReadMore.css";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { text1, text2, text3, text4, text5, text6, text7, text8, text9, smallText1, smallText2, smallText3 } from "./Util"

function ReadMore() {

    const history = useHistory();

    const handleClick = () =>{
        history.push("/");
    }

    return (
        <div className="readMore">
            <div className="button__part">
                <button onClick={handleClick}>Home</button>
                <button>Nation</button>
                <button>Sports</button>
                <button>Politics</button>
                <button>Entertainment</button>
                <button>Search</button>
                <button>Contact Us</button>
            </div>

            <div className="border"></div>

            <div className="middle__part">

                <div className="middle__part__first">
                    <div className="middle__part__firstLeft">
                        <h3> MEMBER FEATURE STORY </h3>
                        <p> No, That’s Not How You Say It </p>
                        <p> A short personal history of my favorite fast food </p>
                    </div>
                    <img src="https://i.pinimg.com/originals/0f/e5/22/0fe52273a933fd2b98c1def8e8e3db9a.jpg" />
                </div>

                <div className="middle__part__second">
                   <p> {text1} </p>
                   <p> {text2} </p>
                   <p> {text3} </p>
                   <p> {text4} </p>
                   <p> {smallText1} </p>
                   <p> {smallText2} </p>
                   <p> <em>{smallText3}</em> </p>
                   <p> {text5} </p>
                   <p> {text6} </p>
                   <p> {text7} </p>
                   <p> {text8} </p>
                   <p> {text9} </p>
                </div>
            </div>

            <div className="border"></div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default ReadMore
