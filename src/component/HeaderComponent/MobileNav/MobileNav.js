import React, { Component, useState,Suspense } from 'react';
import { Nav, Navbar,Dropdown,ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserModal from '../../../UI/Account/UserModal';
import pro from "../../../assets/img/pro.png";
import logo from '../../../assets/img/logo-black.png'
import offerBlack from "../../../assets/img/offer_black.png";
import lampIcon from "../../../assets/img/lamp-icon.svg";
import { useSelector } from 'react-redux';
const Notification = React.lazy(() => import("../../../UI/Notification"));
const MobileNav=(props) => {
    const [isOpenNav,setIsOpenNav]=useState(false)
    const isSignUp = useSelector((state) => state.auth.accessToken);
    const toggleNav=()=>{
      setIsOpenNav(!isOpenNav)
    }
    const [notishow, setNotiShow] = useState(false);
    const notClosed = () => {
      setNotiShow(false);
    };
    const notificationHandler = () => {
      setNotiShow(true);
    };
  return (
 
    <Navbar
              collapseOnSelect
              expand="lg"
              className="px-0"
              variant="dark"
            >
              <Navbar.Brand className="flex-grow-1 d-flex justify-content-between m-0">
                <div className="mobile-logo">
                  <Link to="/">
                    <img src={logo} />
                  </Link>
                </div>

                <div className="mobile-icon d-flex">
                  <Dropdown
                  className="mx-2"
                    onClick={notificationHandler}
                    as={ButtonGroup}
                    title="Dropdown "
                  >
                    <Dropdown.Toggle id="dropdown-custom-1" className="border-0">
                      {/* <span className="badge badge-light">
                      {notificationCount?.unchecked}
                    </span>
                    <span className="sr-only">unread messages</span> */}

                      <svg
                        width={22}
                        height={28}
                        viewBox="0 0 22 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.9694 20.8923L19.2053 19.1282V12.2906C19.2053 8.09231 16.9626 4.57778 13.0514 3.64786V2.71795C13.0514 1.5829 12.1352 0.666664 11.0002 0.666664C9.86512 0.666664 8.94888 1.5829 8.94888 2.71795V3.64786C5.02409 4.57778 2.79503 8.07863 2.79503 12.2906V19.1282L1.03093 20.8923C0.169389 21.7538 0.771098 23.2308 1.98819 23.2308H19.9984C21.2292 23.2308 21.8309 21.7538 20.9694 20.8923ZM5.53007 20.4957V12.2906C5.53007 8.89914 7.59503 6.13675 11.0002 6.13675C14.4053 6.13675 16.4702 8.89914 16.4702 12.2906V20.4957H5.53007ZM13.7352 24.5983C13.7352 26.1026 12.5044 27.3333 11.0002 27.3333C9.48221 27.3333 8.26511 26.1026 8.26511 24.5983H13.7352Z"
                          fill="#D7BC37"
                        />
                      </svg>
                    </Dropdown.Toggle>

                    <Suspense fallback={<h4>Loading...</h4>}>
                      <Notification
                        show={notishow}
                        closed={notClosed}
                        isLoading={props.loading}
                      />
                    </Suspense>
                    </Dropdown>
                    {isSignUp != null && (
                      <Dropdown as={ButtonGroup} title="Dropdown ">
                        <Dropdown.Toggle id="dropdown-custom-1" className="border-0">
                          {/* <i className="fas fa-user"></i> */}
                          <i class="far text-custom-primary h2 my-0 mx-2 fa-user"></i>
                        </Dropdown.Toggle>

                        <UserModal />
                      </Dropdown>
                    )}
                  
                </div>
              </Navbar.Brand>
              <Navbar.Toggle
                className="nav-sizings"
                aria-controls="responsive-navbar-nav"
                
              />
              <Navbar.Collapse
                className="bg-light  bg-gradient"
                id="responsive-navbar-nav"
                className="mt-4"
              >
                <Nav className="mr-auto mobile-nav">
                  <Nav.Link href="#features">
                    {" "}
                    <Link to="/offers" className="header-bottom-btn d-flex align-items: center">
                    <span className="icon-offer icon mr-3"> </span>
                      {/* <i className="fa fa-percent"></i> */}
                      <span className="">Offers</span>{" "}
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="text-dark" href="#pricing">
                    {" "}
                    <svg
                      width={25}
                      height={22}
                      viewBox="0 0 25 22"
                      className="mr-3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5452 2.32386C21.2831 0.955081 19.5484 0.199997 17.6681 0.199997C16.2558 0.199997 14.9573 0.64826 13.8212 1.5269C13.51 1.76755 13.2152 2.03729 12.938 2.33461L12.6667 2.64107C12.3132 2.22054 11.9274 1.84793 11.5124 1.52693C10.3763 0.64826 9.07774 0.199997 7.66548 0.199997C5.78503 0.199997 4.05047 0.955036 2.78843 2.32384C1.54746 3.66994 0.866699 5.50167 0.866699 7.47867C0.866699 9.5117 1.62275 11.3689 3.22218 13.2989L3.61926 13.7643C4.30151 14.5402 5.0667 15.2882 6.2794 16.3659L7.27853 17.2415L11.2968 20.6919L11.4833 20.8548C11.8105 21.1414 12.2309 21.2994 12.6667 21.2994C13.1022 21.2994 13.5227 21.1415 13.8501 20.855L16.1408 18.8825L17.7606 17.4961C19.8345 15.7068 20.8763 14.7293 21.792 13.6753L22.1114 13.2987C23.7107 11.369 24.4667 9.51183 24.4667 7.47867C24.4667 5.50157 23.7861 3.66987 22.5452 2.32386ZM15.2043 3.31538C15.9398 2.74666 16.7646 2.46111 17.6681 2.46111C18.9135 2.46111 20.0525 2.95594 20.8827 3.85644C21.7337 4.7795 22.2058 6.0647 22.2058 7.47867C22.2058 8.97327 21.6489 10.3135 20.3705 11.8561L20.1308 12.1396L19.973 12.32C19.3868 12.9807 18.7111 13.6413 17.6685 14.5721L17.0617 15.1083L12.6654 18.8856L11.6787 18.0332L9.08387 15.8136L8.11546 14.9712C6.74049 13.762 5.94505 12.9922 5.25412 12.1989L4.96302 11.8561C3.68458 10.3136 3.12764 8.97331 3.12764 7.47867C3.12764 6.0647 3.59969 4.7795 4.45067 3.85643C5.28106 2.95588 6.41996 2.46111 7.66548 2.46111C8.56879 2.46111 9.39357 2.74667 10.1291 3.31544C10.6998 3.75677 11.1739 4.33449 11.546 4.95825C11.7831 5.35551 12.2044 5.59483 12.6667 5.59483C13.129 5.59483 13.5503 5.35551 13.7873 4.95836C14.1598 4.33426 14.6338 3.75671 15.2043 3.31538Z"
                        fill="#D7BC37"
                      />
                    </svg>{" "}
                    <span className="">Wishlist</span>
                  </Nav.Link>

                 
                  <Nav.Link href="tel:+8809638111444" className="text-dark">
                    <i className="fa nav-phone text-custom-primary fa-phone mr-3" />
                    <span className="">+8809638111444</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
    );

}

export default MobileNav;