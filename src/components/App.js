import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';


function App() {
    return (
        <Fragment>
            <Router>
                <Navbar /> 
                <Switch>
                    <Route exact path='/'>

                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}


export default App