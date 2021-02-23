import placeIcon from '../../../assets/img/place_24px.svg'
import callIcon from '../../../assets/img/call_24px_black.svg'
import offerBlack from '../../../assets/img/offer.svg'
import expandIcon from '../../../assets/img/expand_more_24px.svg'
import React from 'react';
import { Container, Dropdown, Row,ButtonGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Address from '../../../UI/Address/Address';
import { Link } from 'react-router-dom';

const TopBanner = (props) => {
    const deleverYaddress = useSelector((state) => state.address.addressCurrent);
    const address = useSelector((state) => state.address.userAddress);
    const onDeleveryAddress = () => {
        if (deleverYaddress?.address) {
          return deleverYaddress;
        } else {
          return address[0];
        }
      };
    return (
        <Container fluid className="bg-primary d-none d-lg-block">
<Container>


<Row>
    <div className="col-md-4">
        <div   className="d-flex  h-100 align-items-center">
     <a  onClick={props.categoryClicked} className="d-flex text-dark  h-100 align-items-center">
        <i class="fas fa-bars text-white"></i>    <h5 className="mx-2">Category</h5></a>
                </div>
    </div>
    <div className="col-md-8">
        <div className="d-flex py-3    justify-content-end align-items-center ">
        <div className="offerWrapper  mx-4 ">
       <Link to="/offers" className="d-flex  align-items-center"> 
         <span className="icon-offer icon mr-2"> </span>
        <h5 className="my-0">Offers</h5>
        </Link>
        </div>
        <div className="phneWrapper ">
        <a className="d-flex  mx-4 align-items-center" href="tel:+8809638111444" > 
        <span className="icon-phone mr-2"> </span>
            <h5>+880 9638-111444</h5>
            </a>
        </div>
        <Dropdown as="div" title="User ">
                  <Dropdown.Toggle
                    id="dropdown-custom-1"
                    className="address-button custom-dropdown"
                  >
        <div className="deleveryAddress  ml-4 d-flex align-items-center">
            <span className="icon-place mr-2"></span>
            <div className="deleveryInfo">
                <h6 className="text-left">Delivery to</h6>
                <div className="addressInfo d-flex justify-content-end">
                   <h5>{onDeleveryAddress()?.address?.substring(0, 20)}...</h5> 
                   <span className="button-arrow icon"></span>
                   </div>
            </div>
            </div>
            </Dropdown.Toggle>
            <Address onCurrent={props.currentPosition} />
            </Dropdown>
        </div>
    </div>
</Row>
</Container>
        </Container>
    );
};

export default TopBanner;