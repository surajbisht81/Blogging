import React, { useState } from "react";
import './Home.css';
import Blog from "./Blog";
import Blog2 from "./Blog2";
import Footer from "./Footer";
import { useHistory } from "react-router";

function Home() {

  const [views, setViews] = useState(0);
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("/SignUp");
  }

  return (
    <div className="app">
        
        <div className="upper__part">
          <h1> Blogging </h1>
          <button onClick={handleGetStarted} >Get started </button>
          <input type="text" placeholder="Google Search" />
        </div>

        <span className="views__part"> Total Views: {views} </span>
        
        <div className="button__part">
          <button>Home</button>
          <button>Nation</button>
          <button>Sports</button>
          <button>Politics</button>
          <button>Entertainment</button>
          <button>Search</button>
          <button>Contact Us</button>
        </div>
    
        <div className="border"></div>

        <Blog />

        <div className="border"></div>

        <div className="second__blog">
            <div className="second__blog__left">
               <h1> Welcome to Blogging, Where Words matter</h1>
               <p>We'll deliver the best sotries and ideas on the topics you care about most straight to your homepage, app, or inbox.</p>
            </div>

            <img src="https://optinmonster.com/wp-content/uploads/2017/02/Blog-Post-Ideas-1.png" />
        </div>

        <div className="border"></div>

        <Blog2 />

        <div className="border"></div>

        <Footer />
    </div>
  );
}

export default Home;
