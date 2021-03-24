import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ReadMore from "./ReadMore";
import Home from "./Home";
import SignUp from './SignUp';

function App() {
    return (
      <Router>
         <div className="App">
            <Switch>
               <Route exact path="/">
                   <Home />
               </Route>
               <Route exact path="/Blog2">
                   <ReadMore />
               </Route>
               <Route exact path="/SignUp">
                   <SignUp />
               </Route>
            </Switch>
         </div>
      </Router>
    );
  }

export default App