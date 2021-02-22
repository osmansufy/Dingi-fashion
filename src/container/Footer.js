import React from 'react';
import logo from '../assets/img/logo-solveaz.png'
import play from '../assets/img/googlePlay.png'
import app from '../assets/img/AppStoreLogo.png'
import bkash from '../assets/img/bkash.svg'
import visa from '../assets/img/visa.svg'
import cashOn from '../assets/img/cashOn.svg'
import matercard from '../assets/img/matercard.svg'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
      <div className="container-fluid bg-dark">
        <footer className="py-2">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-3 mt-4 col-sm-6 ">
              <div className="logo justify-content-sm-start justify-content-center">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="social justify-content-sm-start justify-content-center mt-4">
                <div className="box">
                  <i className="fa fa-facebook" />
                </div>
                <div className="box">
                  <i className="fa fa-twitter" />
                </div>
                <div className="box">
                  <i className="fa fa-instagram" />
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4 col-6 ">
              <div className="footer-about">
              <h3>About Daily Plus</h3>
              <ul className="mt-3 p-0">
                <li><Link to="/about"> About US</Link></li>
                <li><a  >FAQ</a></li>
                <li><a href="http://dailyplus.store/terms_of_service.html" target="_blank"  >Terms of Services</a></li>
                <li><a href="http://dailyplus.store/privacy_policy.html" target="_blank"  >Privacy Policy</a></li>
              </ul>
            </div>
            </div>
            <div className="col-md-3 mt-4 col-6 ">
              <div className="footer-contact">

             
              <h3>Contact Us</h3>
              <ul className="mt-3 p-0">
                <li><a  href="tel:+8809638111444" ><i className="fa fa-phone pr-3" />+8809638111444</a></li>
                <li><a href="mailto:customers@dailyplus.store" className="d-flex" ><i className="fa fa-envelope pr-3" />demo@solveaz.com</a></li>
                <li><a><i className="fab fa-facebook-messenger pr-3"></i>Messenger
                </a>
                </li>
                <li><a><i className="fa fa-map-marker pr-3" />Floor 4, Wakil Tower</a></li>
              </ul>
            </div>
            </div>
            <div className="col-md-3 mt-sm-4 col-6 ">
              <div className="footer-app ">

              
              <h3>App Download</h3>
              <ul className="mt-3  p-0">
                <li className=""><a href="https://play.google.com/store/apps/details?id=com.dingi.dailyplus" target="_blank" ><img className="img-fluid" src={play } alt="app-img" /></a></li>
                <li><a href="https://apps.apple.com/us/app/id1520548400" target="_blank" ><img className="img-fluid" src={app} alt="true" /></a></li>
              </ul>
            </div>
            </div>
            
          </div>
          <div className="row">
          <div className=" col-6">
              <p className="text-left">Copyright 2021 © Solveaz</p>
            </div>
          <div className=" col-6">
              <div className="payment-info d-flex">
              <h5 className="mr-2">Payment Methods</h5>
                <ul className="d-flex">
              
                  <li className="mr-1 my-1"><a><img src={cashOn} alt="true" /></a></li>
                  <li className="mr-1 my-1"><a><img src={bkash} alt="true" /></a></li>
                  <li className="mr-1 my-1"><a><img src={visa} alt="true" /></a></li>
                  <li className="mr-1 my-1"><a><img src={matercard}alt="true" /></a></li>    
                </ul>
              </div>
            </div>
          
          </div>
        </div>
      </footer>
      </div>
    );
}

export default Footer;