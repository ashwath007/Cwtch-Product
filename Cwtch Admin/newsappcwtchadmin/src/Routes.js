import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


// Screens

import Home from './Screen/Home';
import Dashboard from './Screen/Dash/Dashboard';
import AddTheme from './Screen/Dash/AddTheme';
import AddSuggestionTopics from './Screen/Dash/AddSuggestionTopics';

const Routes = () => {

        return(
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/addt" component={AddTheme}/>
                    <Route exact path="/adds" component={AddSuggestionTopics}/>




                </Switch>
            </BrowserRouter>
        )
}



export default Routes;