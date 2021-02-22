import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emptyImg from "../assets/img/emptyImg.png";
const SingleFeaturedCategory = (props) => {
    return (
        <div className="mx-3">
            <Link to={"/category/"+props.data.id+"/"+props.data.name}>
            <Image src={    props.data?.thumbnail_image_url
                ? props.data.thumbnail_image_url
                : props.data.image
                ? props.data.image
                : emptyImg} rounded shadow-lg />
            </Link>
        </div>
    );
};

export default SingleFeaturedCategory;