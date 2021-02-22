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
    const [searchShow, setSearchShow] = useState(false);
    const [notishow, setNotiShow] = useState(false);
    const [cartShow, setCartShow] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const deleverYaddress = useSelector((state) => state.address.addressCurrent);
    const address = useSelector((state) => state.address.userAddress);
    const btnClickHandler = () => {
        setShowSidebar(true);
      props.getCategories();
      };
      const shideberClosed = () => {
        setShowSidebar(false);
      };
    const cartClickHandler = () => {
        setCartShow(true);
      };
    const serachToggole = () => {
        setSearchShow(true);
      };
      const notificationHandler = () => {
        setNotiShow(true);
      };
      const notificationCount = useSelector(
        (state) => state.auth.notifiacationCount
      );
      const notClosed = () => {
        setNotiShow(false);
      };
      const cartClosed = () => {
        setCartShow(false);
      };
      const onDeleveryAddress = () => {
        if (deleverYaddress?.address) {
          return deleverYaddress;
        } else {
          return address[0];
        }
      };
      const searchClose = () => {
        setSearchShow(false);
      };
    return (
        <>
 
        <div className="pc-nav">
        <TopBar  loading={props.loading} 
          show={showSidebar}
          closed={shideberClosed}/>
          <TopBanner currentPosition={props.currentPosition} categoryClicked={btnClickHandler} />
        
      </div>
        <Suspense fallback={<h3>Loading...</h3>}>
        <Sidebar
          isLoading={props.loading}
          categories={props.categories}
          show={showSidebar}
          closed={shideberClosed}
        />
      </Suspense>
      <MyBag cartShow={cartShow} closed={cartClosed} />
      </>
    );
};

export default PcNav;