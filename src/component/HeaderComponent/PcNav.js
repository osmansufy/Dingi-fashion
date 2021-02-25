import React, { useState,Suspense } from 'react';
import { Link } from "react-router-dom";
import accountPic from "../../assets/img/account.png";
import logo from "../../assets/img/logo.png";
import callIcon from "../../assets/img/call.png";
import offerIcon from "../../assets/img/offer_24px.png";
import Search from "../../UI/Search";
import {
    Button,
    Navbar,
    NavDropdown,
    Nav,
    ButtonGroup,
    Dropdown,
    Badge,
  } from "react-bootstrap";
import { useSelector } from 'react-redux';

import Sidebar from '../../container/Sidebar';
import MyBag from '../../UI/MyBag';
import TopBar from './PcNav/TopBar';
import TopBanner from './PcNav/TopBanner';
const Notification = React.lazy(() => import("../../UI/Notification"));
const PcNav = (props) => {
    const isSignUp = useSelector((state) => state.auth.accessToken);

    const [cartShow, setCartShow] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

      const shideberClosed = () => {
        setShowSidebar(false);
      };


  
      const cartClosed = () => {
        setCartShow(false);
      };

  
    return (
        <>
 
        <div className="pc-nav">
        <TopBar  loading={props.loading} 
          show={showSidebar}
          closed={shideberClosed}/>
          <TopBanner currentPosition={props.currentPosition}  />
        
      </div>

      <MyBag cartShow={cartShow} closed={cartClosed} />
      </>
    );
};

export default PcNav;