import React, { Component, useState,Suspense } from "react";
import pro from "../../../assets/img/account.png";
// import bagIcon from "../../assets/img/bag_24px.svg";
// import proIcon from "../../assets/img/user_24px.svg";
import logo from '../../../assets/img/logo-piran.jpg'
// import notificationIcon from "../assets/img/svg/notification.svg";
// import wishlistIcon from "../assets/img/svg/wishlist.svg";
// import geinieIcon from "../assets/img/lamp-icon.svg";
import uloadIcon from "../../../assets/img/upload.svg";
// import SideBarCategory from "./SideBarCategory";
import { Button, Container, Row,Dropdown,ButtonGroup } from "react-bootstrap";
import Sidebar from "../../../container/Sidebar";
import Search from "../../../UI/Search";
import { Link } from "react-router-dom";
import MyBag from "../../../UI/MyBag";
import { useSelector } from "react-redux";
import UserModal from "../../../UI/Account/UserModal";
const Notification = React.lazy(() => import("../../../UI/Notification"));
const TopBar = (props) => {
  const [searchShow, setSearchShow] = useState(false);
  const [notishow, setNotiShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const isSignUp = useSelector((state) => state.auth.accessToken);
  const searchClose = () => {
    setSearchShow(false);
  };
  const notificationHandler = () => {
    setNotiShow(true);
  };
  const notClosed = () => {
    setNotiShow(false);
  };
  const cartClosed = () => {
    setCartShow(false);
  };
  const cartClickHandler = () => {
    setCartShow(true);
  };
  return (
 <>
      <Container className="d-lg-block d-none py-2">
        <Row>
          <div className="col-md-6 ">
            <div className="left-topbar-wrapper     justify-content-between d-flex align-items-center">
              <div className="logo-container">
                {/* <img src="" alt="Logo" srcset=""/> */}
                <Link to="/">
               <img src={logo} alt=""/>
                </Link>
                
              </div>
             
             <Search
                  show={searchShow}
                  className=" search"
                  closed={searchClose}
                />
              <div className="d-flex d-md-none">
              <span className="icon-bag  "></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              className="d-flex ml-5 justify-content-between h-100
    align-items-center"
            >
               <Dropdown
                    onClick={notificationHandler}
                    as={ButtonGroup}
                    title="Dropdown "
                  >

<Dropdown.Toggle id="dropdown-custom-1" className="border-0"><span className="icon-notification icon "></span></Dropdown.Toggle>
<Suspense fallback={<h4>Loading...</h4>}>
                      <Notification
                        show={notishow}
                        closed={notClosed}
                        isLoading={props.loading}
                      />
                    </Suspense>
                  </Dropdown>
              
             
              
              <span className="icon-wishlist  "></span>
              <span onClick={cartClickHandler} className="icon-bag  "></span>
              {isSignUp ? (
                      <Dropdown as={ButtonGroup} title="Dropdown " >
                        <Dropdown.Toggle id="dropdown-custom-1" className="border-0">
                        <i className="far text-custom-primary h4 m-0 fa-user"></i>
                        </Dropdown.Toggle>

                        <UserModal />
                      </Dropdown>
                    ): <Button  className="radius-50 " color="warning">
                   <Link to="/signup" className="d-flex     align-items-center"> 
                   <span className="icon-login mr-1"></span>
                    Login </Link>
                  </Button >}
             
            </div>
          </div>
        </Row>
      </Container>
      <MyBag cartShow={cartShow} closed={cartClosed} />
</>
  );
};

export default TopBar;
