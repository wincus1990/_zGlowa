import React from 'react';
import Navigation from 'Components/organisms/Navigation/Navigation';
import Rooms from 'Components/organisms/Rooms/Rooms.js';
import Footer from 'Components/organisms/Footer/Footer';
import MainPage from 'Views/MainPage/MainPage';
import MainTemplate from 'Templates/MainTemplate/MainTemplate.js';
import DetailsTemplates from 'Templates/DetailsTemplates/DetailsTemplates.js';
import ResultTemplate from 'Templates/ResultTemplate/ResultTemplate';
import UserProfileTemplates from 'Templates/UserProfileTemplate/UserProfileTemplate.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from 'Routes/Index.js';

const Root = () => {

    return (
      <MainTemplate>
        <BrowserRouter>
          <Navigation />
          <Rooms />
            <Switch>
              <Route exact path = { Routes.main } component = { MainPage } /> 
              <Route path = { Routes.item } component = { DetailsTemplates } />
              <Route path = { Routes.announcements } component = { ResultTemplate } />
              <Route path = { Routes.user_name } component = { UserProfileTemplates } />
              <Route path = { Routes.logged } component = { MainPage } />
            </Switch>
            <Footer />
        </BrowserRouter>
      </MainTemplate>
    );
}

export default Root;
