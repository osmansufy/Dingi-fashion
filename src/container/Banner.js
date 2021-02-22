import React, { useEffect, useState } from "react";

import axios from '../axios'
import { Carousel,Container,Row ,ListGroup, Button} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Banner = (props) => {
  const history=useHistory()
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const goToCategory=(cat)=>{
    history.push(`/category/${cat.id}/${cat.name}`)
  }
  const [carouselItems,setCarouselItems]=useState([])
  const [categories,setCategories]=useState([])
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
  useEffect(()=>{
    axios.get('catalogue/category/')
    .then(response=>{
           
      setCategories(response.data)
      console.log("banner",response)
      
      
  }).
  catch(error=>{
    console.log(error)

  })
  },[])
  return (
    <Container className="">
      <Row>
        <div className="col-md-3 pr-0">
        <ListGroup className="list-category d-lg-block d-none">
 {categories.map(category=>(
    <ListGroup.Item action onClick={()=>goToCategory(category)} className="d-flex align-items-center justify-content-between">
      {category.name}<i class="fas fa-chevron-right"></i>

      </ListGroup.Item>
      
 ))}
</ListGroup>
        </div>
        <div className="col-lg-9 mt-2 col-12">
        <Carousel activeIndex={index}  onSelect={handleSelect} nextIcon="" prevIcon="">
    {carouselItems && carouselItems.filter(item=>item.is_featured_secondary).map(item=>(
      <Carousel.Item key={item.id}>
      <img src={item.secondary_banner} className="d-block img-fluid w-100" alt="banner-img" />
      <div className="banner-image-content">
      <Button className="banner-button px-4 py-3 text-light" variant="warning">Shop Now</Button>{' '}
      </div>
    </Carousel.Item>
    ))}
    
  </Carousel>
        </div>
      </Row>
    </Container>
  );
};

export default Banner;
