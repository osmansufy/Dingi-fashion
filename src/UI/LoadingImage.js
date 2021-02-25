import { useState } from "react";

const LoadingImage = (props) => {

    const [loaded,setLoaded]=useState(false);
  
    const showImage = () => {
      setLoaded(true);
    }
    return ( <>
         <img 
   
         src={props.emptyImg} style={ loaded ? {display: "none"} : {}} />
        <img 
   
        className={props.imageClass} src={props.realImage}
             onLoad={showImage} style={ loaded ? {} : {display: "none"}} />
    </>  );
}
 
export default LoadingImage;