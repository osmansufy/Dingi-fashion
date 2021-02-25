import React, { useEffect, useState } from 'react';
import AdsImage from "../assets/img/ads.png";
import axios from '../axios'
import { Button, Container,Carousel } from 'react-bootstrap';
const Ads = (props) => {
    const [carouselItems,setCarouselItems]=useState([])
    useEffect(()=>{
        axios.get('catalogue/offer/?is_featured=true')
        .then(response=>{
               
          setCarouselItems(response.data)
          console.log("banner",response)
          
          
      }).
      catch(error=>{
        console.log(error)
    
      })
      },[])
    return (
        <>
        <Container className=" my-5">
        <Carousel controls={false}>
  {carouselItems && carouselItems.filter(item=>item.is_featured_primary).map(item=>(
    <Carousel.Item as="a" interval={2000}>
  <img src={item?.primary_banner} alt=""/>
  <div className="image-over-container d-flex flex-column align-items-end">
          
      
            </div>
  </Carousel.Item>
  )) }
  
</Carousel>
        {/* <div className="ads-container">
            <div className="image-container">
                <img src={AdsImage} alt=""/>
            </div>
            <div className="image-over-container d-flex flex-column align-items-end">
          
            <Button color="warning">See Details</Button>
            </div>
        </div> */}
       
       </Container>

     </>
    );
};

export default Ads;