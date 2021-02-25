// import './assets/css/adminlte.min.css'

// import './assets/css/animate.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/responsive.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Home from './pages/Home'
// import Sidebar from "./container/Sidebar";
import Header from "./container/Header";
import Footer from "./container/Footer";
import React, { useEffect, useState, Suspense } from "react";
import { createBrowserHistory } from "history";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryPage from './pages/Category';

// import OffersPage from './pages/Offers';
// import CheckOut from './pages/CheckOut';
import Success from "./pages/CheckOutSuccess";
// import SignUp from './pages/Signup';
// import User from './pages/User';
// import Orders from './pages/Orders';
// import OrderInfo from './pages/order/OrderInfo';
import Logout from "./pages/logout";
// import Location from './pages/Location';
import AddAddress from "./component/Map/AddAddress";
import PreOrderInfo from "./pages/order/PreOrderInfo";
import PreOrderDetails from "./component/PreOrder/PreOrderDetails";
import ProductId from "./pages/ProductId";


import ChangePass from "./component/SignUp/ChangePass";
import Spinner from "./container/Spinner/Spinner";
import Tearms from "./pages/Tearms";
import Privacy from "./pages/Privacy";

import ScrollToTop from "./component/ScrollToTop";

const Home = React.lazy(() => import("./pages/Home"));
// const CategoryPage = React.lazy(() => import("./pages/Category"));
const SignUp = React.lazy(() => import("./pages/Signup"));
const OrderInfo = React.lazy(() => import("./pages/order/OrderInfo"));
const Orders = React.lazy(() => import("./pages/Orders"));
const OffersPage = React.lazy(() => import("./pages/Offers"));
const CheckOut = React.lazy(() => import("./pages/CheckOut"));
const User = React.lazy(() => import("./pages/User"));
const Location = React.lazy(() => import("./pages/Location"));


const AboutUs = React.lazy(() => import("./pages/About"));
const App = (props) => {
  const history = createBrowserHistory();
  useEffect(() => props, [props, history]);

  let routes = (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/category/:id/:name"exact component={CategoryPage}
        />
        <Route path="/product/:id" exact 
        
        component={ProductId} />

        <Route
          path="/offers"
          exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <OffersPage />
            </Suspense>
          )}
        />

        <Route
          path="/checkout"
          exact
          render={() => (
            <Suspense fallback={<h3>Loading...</h3>}>
              <CheckOut />
            </Suspense>
          )}
        />
        <Route path="/checkout/success" exact component={Success} />
        <Route path="/signup" exact
          render={() => (
            <Suspense fallback={<Spinner />}>
              <SignUp />
            </Suspense>
          )}
        />
        <Route
          path="/user"
          exact
          render={() => (
            <Suspense fallback={<h3>Loading...</h3>}>
              <User />
            </Suspense>
          )}
         
        />
        <Route path="/user/changepassword" exact component={ChangePass} />
        <Route
          path="/order"
          exact
          render={() => (
            <Suspense fallback={<h3>Loading...</h3>}>
              <Orders />
            </Suspense>
          )}
        />
        <Route
          path="/order/info"
          exact
          render={() => (
            <Suspense fallback={<h3>Loading...</h3>}>
              <OrderInfo />
            </Suspense>
          )}
        />
        <Route path="/order/preorder" exact component={PreOrderInfo} />
  
      
        <Route path="/order/preorder/info" exact component={PreOrderDetails} />
       

        <Route path="/logout" exact component={Logout} />
        <Route
          path="/location"
          exact
          render={() => (
            <Suspense fallback={<h3>Loading...</h3>}>
              <Location />
            </Suspense>
          )}
        />
        <Route path="/location/save" exact component={AddAddress} />
        <Route
          path="/about"
          exact
          render={() => (
            <Suspense fallback={<h3>Loading...</h3>}>
              <AboutUs />
            </Suspense>
          )}
        />
        <Route path="/tearms" exact component={Tearms} />
        <Route path="/privacy" exact component={Privacy} />
      </Switch>
    </Suspense>
  );
  return (<>
    <div className="wrapper">
      <div className="content-wrapper">
        <Header />
      
        {routes}

        <Footer />
        <ScrollToTop />
      </div>
    </div>
      
      </>
  );
};

export default App;
