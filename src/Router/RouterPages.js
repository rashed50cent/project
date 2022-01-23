import React, { Component, Fragment } from 'react';
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import PortfolioPages from '../pages/PortfolioPages';
import HomePages from '../pages/HomePages';
import AboutPages from '../pages/AboutPages';
import CoursePages from '../pages/CoursePages';


class RouterPages extends Component {
    render() {
        return (
            <Fragment>
                    <Switch>
                   
                   <Route exact path="/" component={HomePages} />
                       <Route exact path="/About" component={AboutPages} />
                       <Route exact path="/Course" component={CoursePages} />
                       <Route exact path="/Portfolio" component={PortfolioPages} />
   
                   </Switch>
            
            </Fragment>
                
                
           
        );
    }
}

export default RouterPages;