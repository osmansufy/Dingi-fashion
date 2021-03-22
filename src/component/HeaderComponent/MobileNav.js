import React, { useState } from 'react';
import { Suspense } from 'react';
import { Navbar,Dropdown,ButtonGroup,Nav } from 'react-bootstrap';
import { useSelector, } from 'react-redux';
import { Link } from 'react-router-dom';
import UserModal from '../../UI/Account/UserModal';
import offerBlack from "../../assets/img/offer_black.png";
import lampIcon from "../../assets/img/lamp-icon.svg";
import whiteDown from "../../assets/img/white-down.png";

import Search from '../../UI/Search';
import CartBtn from '../../UI/Button/CartBtn';
import Address from '../../UI/Address/Address';
import MyBag from '../../UI/MyBag';
import Sidebar from '../../container/Sidebar';
import Mobile from './MobileNav/MobileNav'
const Notification = React.lazy(() => import("../../UI/Notification"));
const MobileNav = (props) => {
    const isSignUp = useSelector((state) => state.auth.accessToken);
    const deleverYaddress = useSelector((state) => state.address.addressCurrent);
    const address = useSelector((state) => state.address.userAddress);
    const [notishow, setNotiShow] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [cartShow, setCartShow] = useState(false);
    const notClosed = () => {
        setNotiShow(false);
      };
      const notificationHandler = () => {
        setNotiShow(true);
      };
      const cartClosed = () => {
        setCartShow(false);
      };
      const shideberClosed = () => {
        setShowSidebar(false);
      };
      const btnClickHandler = () => {
        setShowSidebar(true);
      props.getCategories();
      };
      const [searchShow, setSearchShow] = useState(false);
      const searchClose = () => {
        setSearchShow(false);
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
      
    return ( <>
   
        <div className="mobile-nav ">
        <div className="mobile-show">
        
          {isSignUp == null && (
            <div className="d-flex  bg-custom-warning py-1 pl-2 pr-3 align-items-center justify-content-between">
              <span >You are not logged in</span>{" "}
              <Link to="/signup">
                <b className="">Login</b>
              </Link>
            </div>
          )}
          <div className="container">
            <Mobile />
            
            </div>
        </div>
        

        <div className="container mobile-show shadow-sm  pb-2">
          <div className=" mobile-show">
            <div className="d-flex  mt-2 pr-2 justify-content-space-between">
              <a
                onClick={btnClickHandler}
                id="nav-link "
                className="nav-link sidebar-toggle pl-0"
                role="button"
              >
                <i
                  className="fas fa-bars "
                  style={{ paddingRight: "5px", color: "#D7BC37" }}
                />
              </a>

              <Search
                show={searchShow}
                className="flex-grow-1 mr-3 search-mobile search"
                closed={searchClose}
              />
              <CartBtn className="" clicked={cartClickHandler}>
                {" "}
                <svg
                  width={23}
                  height={27}
                  viewBox="0 0 23 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.672 6.70655L22.6624 25.6615C22.6854 25.8811 22.6143 26.1003 22.4662 26.2645C22.3186 26.4286 22.108 26.5223 21.887 26.5223H0.779479C0.558693 26.5223 0.348098 26.4286 0.200241 26.2645C0.0525849 26.1003 -0.0187458 25.8811 0.00423188 25.6615L1.9947 6.70655C2.03646 6.30973 2.37093 6.00842 2.76995 6.00842H6.51111V5.15545C6.51111 2.49663 8.67441 0.333336 11.3334 0.333336C13.9922 0.333336 16.1555 2.49663 16.1555 5.15545V6.00842H19.8967C20.2957 6.00842 20.6302 6.30973 20.672 6.70655ZM8.53666 5.15545C8.53666 3.61395 9.79169 2.35889 11.3334 2.35889C12.8749 2.35889 14.13 3.61393 14.13 5.15545V5.54176H8.53666V5.15545ZM20.5034 24.4967H2.16328L3.89209 8.03398H6.04445V9.28504C6.04445 9.97316 6.60244 10.5311 7.29056 10.5311C7.97867 10.5311 8.53666 9.97316 8.53666 9.28504V8.03398H14.13V9.28504C14.13 9.97316 14.688 10.5311 15.3761 10.5311C16.0642 10.5311 16.6222 9.97316 16.6222 9.28504V8.03398H18.7746L20.5034 24.4967Z"
                    fill="#D7BC37"
                  />
                </svg>
              </CartBtn>
            </div>
          </div>
          {isSignUp ? (
            <Dropdown className="mobile-show " title="Dropdown ">
              <Dropdown.Toggle
                id="dropdown-custom-1"
                className="address-button custom-dropdown w-100 pl-1 mt-2"
              >
                <div className="d-flex py-2 px-2 w-100  justify-content-between align-items-center phoneAdelevery">
                  {" "}
                  <h6 className="ml-2 ">Delivery to</h6>
                  <p >
                    {onDeleveryAddress()?.address?.substring(0, 40)}...
                  </p>
                  <img className="arrowSize" src={whiteDown} />
                </div>
              </Dropdown.Toggle>
              <Address onCurrent={props.currentPosition} />
            </Dropdown>
          ) : (
            ""
          )}
        </div>
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

export default MobileNav;