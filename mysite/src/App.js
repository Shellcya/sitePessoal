import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Portifólio from "./components/Portifólio/Portifólio";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contato from "./components/Contato/Contato";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";


import "./App.css"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Route exact path="/">
          <About />
        </Route>

        <Route exact path="/Portifólio">
          <Portifólio />
        </Route>

        <Route exact path="/Contato">
          <Contato />
        </Route>

        <Route exact path="/Error">
          <Error />
        </Route>

      </Switch>

      <Footer />


    </BrowserRouter >
  );
}

export default App;
