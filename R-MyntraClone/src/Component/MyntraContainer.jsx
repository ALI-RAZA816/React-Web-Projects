import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemsContainer from './ItemsContainer'
import CartPage from './CartPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FetchItems from './FetchItems';
import Loader from './Loader';
import { useSelector } from 'react-redux';


export default function MyntraContainer() {
  const fetchStatus = useSelector((store) => store.fetchstatus);
  return (
    <div>
      <Router>
          <Header />
        <Switch>
          <Route exact path="/">
            <FetchItems/>
            {fetchStatus.currentFetch === true ? <Loader/> : <ItemsContainer />}
          </Route>
          <Route exact path="/cart-page">
            {fetchStatus.currentFetch === true ? <Loader/> : <CartPage />}
          </Route>
        </Switch>
          <Footer />
      </Router>
    </div>
  )
}
