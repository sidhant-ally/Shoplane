import axios from "axios"
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PDP from "./components/PDP";
import './App.css';

// Components
import ProductGrid from "./components/ProductGrid"
import TopBar from "./components/TopBar"
import Home from "./components/Home"
import { PATH } from "./utils/constants"
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Error404 from "./components/Error";

import { connect } from "react-redux";
import { getProducts } from "./redux/actions";

function App(props) {
  const { clothing, accessory } = props
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    console.log(`Fetching all products`)
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then(res => {
        updateLoading(false)
        props.sendProducts(res.data);
      })
      .catch(err => alert(err))
  }, []) // componentDidMOunt


  useEffect(() => { }) // componentDidMOunt and componentDidUpdate
  useEffect(() => () => { }, []) // componentWillUnmount

  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route path={`${PATH}/`} exact><Home /></Route>
          <Route path={`${PATH}/clothing`} exact><ProductGrid loading={loading} products={clothing} /></Route>
          <Route path={`${PATH}/accessories`} exact><ProductGrid loading={loading} products={accessory} /></Route>
          <Route path={`${PATH}/product/:id`} exact component={PDP} ></Route>
          {/* <Route component={Error} ></Route> */}
          <Route path={`${PATH}/signin`} exact component={Signin} ></Route>
          <Route path={`${PATH}/signup`} exact component={Signup} ></Route>
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = (store) => ({
  clothing: store.clothing,
  accessory: store.accessory,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (payload) => dispatch(getProducts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
