import Slider from "react-slick";
// import leftArrow from '../assets/img/leftArrow.svg'
// import rightArrow from '../assets/img/rightArrow.svg' 
import axios from '../axios'
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleFeaturedCategory from "../component/SingleFeaturedCategory";

const FeaturedCategory = () => {

  const [featuredCategories,setFeaturedCategories]=useState([])
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    // centerMode: true,
    centerPadding: "20px",
    centerMargin: "20px",
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay:true,
    lazyLoad: true,
    // nextArrow: <img src={rightArrow} alt=""/>,
    // prevArrow: <img src={leftArrow} alt="" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  };
useEffect(()=>{
  axios.get('catalogue/category/').then(response=>{
           
    setFeaturedCategories(response.data)
})
.catch((error)=>{
console.log(error);
})
},[])

    return ( 
    <section>
    <Container className="my-5 ">
  
      <div className="section-top my-3 justify-content-between d-flex">
        <h3 className="section-title font-weight-bold">Shop by Brands</h3> 
     
      </div>
  { featuredCategories.length >0 ? 
     <Slider {...settings}>
     {featuredCategories && featuredCategories.map(category=>(
       <SingleFeaturedCategory key={category.id} data={category} />
     ))}
      </Slider>
      : <h5 className="text-center bg-primary py-5">Not Found Any Category </h5>
  }
      

  </Container> 
  </section>
  );
}
 
export default FeaturedCategory;