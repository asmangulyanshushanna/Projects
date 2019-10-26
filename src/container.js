
import React from 'react';
import AddComment from './add_review';
import Login from './login';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

function Container() {
return (
    <Router>
        <div>
            <Switch>
                <Route exact  path='/'  component={Login} /> 
                <Route exact  path='/hotels'  component={App} /> 
                <Route  path='/:id/newcomment'  component={AddComment} />
            </Switch>
        </div>       
    </Router>
);
}
export default Container;