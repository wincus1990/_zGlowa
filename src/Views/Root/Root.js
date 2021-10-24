import React from 'react';
import Navigation from 'Components/organisms/Navigation/Navigation';
import Rooms from 'Components/organisms/Rooms/Rooms.js';
import Footer from 'Components/organisms/Footer/Footer';
import Main from 'Views/Main/Main';
import MainTemplate from 'Templates/MainTemplate/MainTemplate.js';
import DetailsPage from 'Templates/DetailsTemplates/DetailsTemplates.js';
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
              <Route path = '/:id' component = { DetailsPage } />
            </Switch>
          <Footer />
          </BrowserRouter>
        </MainTemplate>
    );
}

export default Root;
