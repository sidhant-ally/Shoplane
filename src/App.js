import axios from "axios"
import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PDP from "./components/PDP";
import './App.css';

// Components
import TopBar from "./components/TopBar"
import Home from "./components/Home"
import { PATH } from "./utils/constants"
import Error404 from "./components/Error";

import { connect } from "react-redux";
import { getProducts, setRef } from "./redux/actions";
import Cart from "./components/Cart";
import OrderConfirm from "./components/OrderConfirm";

function App(props) {
  const [loading, updateLoading] = useState(true)
  const clothingRef = useRef()
  const accessoryRef = useRef()

  useEffect(() => {
    props.sendRef(clothingRef, accessoryRef)
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
          <Route path={`${PATH}/`} exact><Home loading={loading} /></Route>
          <Route path={`${PATH}/product/:id`} exact component={PDP} ></Route>
          {/* <Route component={Error} ></Route> */}
          <Route path={`${PATH}/cart`} exact component={Cart} ></Route>
          <Route path={`${PATH}/orderconfirm`} exact component={OrderConfirm} ></Route>
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
  sendRef: (clothingRef, accessoryRef) => dispatch(setRef(clothingRef, accessoryRef)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
