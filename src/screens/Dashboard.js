import React from "react";
import Header from "../components/Header";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Magasin from "./Magasin";
import Couleur from "./Couleur";
import Tendance from "./Tendance";
import Accueil from "./Accueil";
import Produit from "./Produit";
const Dashboard = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="h-screen w-full">
      <Header />
      <Switch>
        <Route exact path={path}>
          <Accueil />
        </Route>
        <Route exact path={`${path}/colors`}>
          <Couleur />
        </Route>
        <Route exact path={`${path}/Magasin`}>
          <Magasin />
        </Route>
        <Route exact path={`${path}/Produit`}>
          <Produit />
        </Route>
        <Route  exact path={`${path}/Tendance`}>
          <Tendance />
        </Route>
        
      </Switch>
    </div>
  );
};

export default Dashboard;
