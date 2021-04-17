import React from "react";
import Login from "./screens/Login";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  document.body.className = "bg-gray-200";
  return (
    <Provider store={store}>
      <div className="bg-gray-200 h-screen flex  justify-center w-full">
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
