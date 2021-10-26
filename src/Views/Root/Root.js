import React from 'react';
import Navigation from 'Components/organisms/Navigation/Navigation';
import Rooms from 'Components/organisms/Rooms/Rooms.js';
import Footer from 'Components/organisms/Footer/Footer';
import Main from 'Views/Main/Main';
import MainTemplate from 'Templates/MainTemplate/MainTemplate.js';
import DetailsTemplates from 'Templates/DetailsTemplates/DetailsTemplates.js';
import ResultTemplate from 'Templates/ResultTemplate/ResultTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from 'Routes/Index.js';


const Root = () => {
    return (
        <MainTemplate>
          <BrowserRouter>
          <Navigation />
          <Rooms />
            <Switch>
              <Route exact path = { Routes.main } component = { Main } /> 
              <Route path = { Routes.item } component = { DetailsTemplates } />
              <Route path = { Routes.announcements } component = { ResultTemplate } />
            </Switch>
            
          <Footer />
          </BrowserRouter>
        </MainTemplate>
    );
}

export default Root;
