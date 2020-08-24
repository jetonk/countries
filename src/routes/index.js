import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'containers/Main';
import Countries from 'containers/Countries';
import Country from 'containers/Country';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:region/countries" component={Countries} />
        <Route path="/country/:countryName" component={Country} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
