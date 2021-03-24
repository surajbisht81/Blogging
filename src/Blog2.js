import React from 'react';
import "./Blog2.css";

function Blog2() {
    return (
        <div className="blog">
            <div className="firstOf__first__blog">
              <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/productsimages/fiddler/fse2.png?sfvrsn=473952c_1"/>
              <h2> A few good reasons why you should learn to code </h2>
              <p> You might be wondering if learning to code is something you should... </p>
              <p className="para__first"> Rocky Jagtiani </p>
              <p className="para__second"> Jan 9 · 5 min read </p>
            </div>

            <div className="secondOf__first__blog">
               <div className="part1">
                  <img src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397192181/bc47df8209e8fdc0fa8befb6dfc41ae2.png"/>
                  <p> Only buy something that you’d be perfectly happy to hold if the market shut down for 10 years. </p>
               </div>

               <div className="part1">
                  <img src="https://image.shutterstock.com/image-vector/summer-vibes-typographic-inscription-on-260nw-646526800.jpg"/>
                  <p> When I figured out how to work my grill, it was quite a moment. I discovered that summer is a completely different experience when you know how to grill. </p>
               </div>

               <div className="part1">
                  <img src="https://cdn1.vectorstock.com/i/1000x1000/84/15/ceramic-floor-interior-creative-business-logo-vector-24918415.jpg"/>
                  <p> Chains of habit are too light to be felt until they are too heavy to be broken. </p>
               </div>
               
            </div>

            <div className="thirdOf__first__blog">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6c4KUCAIFaYHjijS1g-VErRQZfH2llmGAtQ&usqp=CAU"/>
                <h2> Deep space radio waves baffle astronomers; aliens not ruled out </h2>
                <p>Every time we see something we’ve never seen before that is an opportu..</p>
                <p className="para__first"> Enzyme Snehar </p>
                <p className="para__second"> Jan 29 · 8 min read </p>
            </div>
        </div>
    )
}

export default Blog2
