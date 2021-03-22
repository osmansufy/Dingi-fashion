import React, { useCallback, useEffect, useState } from "react";
import ButtonLink from "../UI/Button/ButtonLink";
// import Button from '../UI/Button/Button';
import MyBag from "../UI/MyBag";
import CartBtn from "../UI/Button/CartBtn";
import { Link } from "react-router-dom";
// import Notification from "../UI/Notification";
import CartBag from "../UI/CartBag";
import Search from "../UI/Search";
import { useDispatch, useSelector } from "react-redux";
import UserModal from "../UI/Account/UserModal";
import Address from "../UI/Address/Address";
import deliveryIcon from "../assets/img/delivery-icon.png";


import * as actionAddress from "../store/actions/actionAddress";
import * as actionAuths from "../store/actions/actionAuth";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  ButtonGroup,
  Dropdown,
  Badge,
} from "react-bootstrap";
import axios from "../axios";
// import Sidebar from "./Sidebar";
import { Suspense } from "react";
import AppAds from "../component/HeaderComponent/AppAds";
import PcNav from "../component/HeaderComponent/PcNav";
import MobileNav from "../component/HeaderComponent/MobileNav";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Notification = React.lazy(() => import("../UI/Notification"));
const Header = (props) => {
  const [categories, setCategories] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const isSignUp = useSelector((state) => state.auth.accessToken);
  const [cartShow, setCartShow] = useState(false);

  const [searchShow, setSearchShow] = useState(false);
  const [appHide, setAppHide] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const address = useSelector((state) => state.address.userAddress);
  const dispatch = useDispatch();
  const onAddress = (isSignUp) =>
    dispatch(actionAddress.onUserAddress(isSignUp));
  const notGetingCuurentLocation = (address) =>
    dispatch(actionAddress.onAddressSelected(address));
  const onNotifications = (isSignUp) =>
    dispatch(actionAuths.onNotificationsCount(isSignUp));
  const onCurrentAddressAction = (latitude, longitude, isSignUp) =>
    dispatch(actionAddress.getReverseGeoCode(latitude, longitude, isSignUp));
  const deleverYaddress = useSelector((state) => state.address.addressCurrent);
  const notificationCount = useSelector(
    (state) => state.auth.notifiacationCount
  );

  const getCategories = () => {
    if (categories.length == 0) {
      setLoading(true);
      axios
        .get("catalogue/category/")
        .then((response) => {
          setCategories(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };
  const shideberClosed = () => {
    setShowSidebar(false);
  };
  const btnClickHandler = () => {
    setShowSidebar(true);
    getCategories();
  };

  const currentPosition = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 50000,
      maximumAge: 0,
    };

    const render = (pos) => {
      const { latitude, longitude } = pos.coords;

      onCurrentAddressAction(latitude, longitude, isSignUp);
    };
    const notFound = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(render, notFound, options);
    } else {
      console.log("notLocation");
    }
  };

  useEffect(() => {
    if (isSignUp) {
      currentPosition();
      onAddress(isSignUp);
      onNotifications(isSignUp);
    }
  }, [isSignUp]);
 
  const serachToggole = () => {
    setSearchShow(true);
  };
  const cartClosed = () => {
    setCartShow(false);
  };
 
  const searchClose = () => {
    setSearchShow(false);
  };
 
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return (
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/WPDesktop/i)
      );
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  const cartClickHandler = () => {
    setCartShow(true);
  };
  const onDeleveryAddress = () => {
    if (deleverYaddress?.address) {
      return deleverYaddress;
    } else {
      return address[0];
    }
  };
  let appClasses = ["appShow"];
  if (appHide) {
    appClasses = ["appShow", "close"];
  }
  let appLink =
    "https://play.google.com/store/apps/details?id=com.dingi.dailyplus";
  if (isMobile.iOS()) {
    appLink = "https://apps.apple.com/us/app/id1520548400";
  }
  return (
    <>
      {/* <AppAds hide={appHide} clicked={() => setAppHide(true)} /> */}
      <header className="sticky-top ">
      <PcNav getCategories={getCategories} categories={categories} loading={loading} currentPosition={currentPosition}/>
        
      <MobileNav getCategories={getCategories} categories={categories} loading={loading} currentPosition={currentPosition}/>
        
      </header>

      <CartBag clicked={cartClickHandler} />
      <MyBag cartShow={cartShow} closed={cartClosed} />
      
    </>
  );
};

export default Header;
