import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__upper">
               <p> About Us </p>
               <p> Privacy Policy </p>
               <p> Newsletter </p>
               <p> Sitemap </p>
            </div>

            <div className="footer__lower">
               <p> Copyright © 2019 </p>
               <p> Suven Consultants and technology pvt ltd </p>
               <p> All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer
