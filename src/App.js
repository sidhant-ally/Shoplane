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

function App() {
  const [clothing, updateClothing] = useState([])
  const [accessory, updateAccessory] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    console.log(`Fetching all products`)
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then(res => {
        let clothing = res.data.filter(({ isAccessory }) => !isAccessory)
        let accessory = res.data.filter(({ isAccessory }) => isAccessory)
        updateClothing(clothing)
        updateAccessory(accessory)
        updateLoading(false)
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
