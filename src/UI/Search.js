import { useEffect, useRef, useState } from "react";
import Axios from "../axios";
import "./search.css";
import bagIcon from "../assets/img/bag_white.png";

import info from "../assets/img/info_24px.png";
import Spinner from "../container/Spinner/Spinner";
import { useHistory } from "react-router";
const Search = (props) => {
  const [searchEnter, setSearchEnter] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef();
  const history = useHistory();
  console.log(searchResult);
  console.log(searchEnter);

  const getPreOrders = () => {
    if (searchEnter !== "") {
      const timer = setTimeout(() => {
        setShowResult(false);
        if (searchEnter === inputRef.current.value) {
          const query = searchEnter.length === 0 ? "" : `?token=${searchEnter}`;

          Axios.get(
            "catalogue/product/public/" + query
          ).then((response) => {
            setsearchResult(response.data);
            setShowResult(true);
          });
        }
      }, 200);

      return () => {
        clearTimeout(timer);
      };
    }
  };
 
  useEffect(() => {
    getPreOrders();
  }, [searchEnter, inputRef]);

  const onSearchClose = () => {
    setSearchEnter("");
    props.closed();
  };
  const onProductSelect = (id) => {
    setSearchEnter("");
    history.push("/product/" + id);
  };

  let products = "";
  if (showResult && searchEnter.length > 0) {
    products = (
      <div className="search-container" id="searchContainer">
        <div className="search-result" id="searchResult">
          <h4 className="mb-4">Search Result </h4>
          {searchResult.length > 0 ? (
            <ul>
              {searchResult.map((product) => (
                <>
                  <li >
                    <a className="my-2" onClick={() => onProductSelect(product.id)}>
                      <div className="search-result-list w-100">
                        <div className="search-result-list-img mr-2">
                          <img
                            src={
                              product.image_list[0] &&
                              product.image_list[0].thumbnail_image_url
                            }
                            alt="true"
                          />
                        </div>
                        <div className="search-result-list-detail my-md-3">
                          {/* <button className="btn recommended-btn mb-2">Recommended</button> */}
                          <h6>
                            {product && product.name}--
                            {product && product.unit_name}
                          </h6>
                          <p className="regular-price m-0 mt-md-2"></p>
                          <div className="sell-price m-0 mt-md-2">
                            ট{" "}
                            {product.inventory_list[0] &&
                              product.inventory_list[0].unit_price_final}
                          </div>
                        </div>
                        <div className="search-result-list-btns">
                          <div className="search-result-list-btn-cart d-flex">
                            <i className="fa fa-heart-o mr-2" />
                            <button className="btn search-btn btn-primary mb-1">
                              <img className="mr-md-3" src={bagIcon} />
                              <span className="flex-grow-1">Add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <hr />
                  </li>
                 
                </>
              ))}
            </ul>
          ) : (
            <h5 className="text-center bg-primary my-2 py-5">Not Found Any Products </h5>
          )}
        </div>
        {/* Search End */}
      </div>
    );
  }
  return (
    <div className={props.className}>
      {/* <span onClick={onSearchClose} className="search-close">
        ×
      </span> */}
      {/* <div className="input-group search-custom md-form form-sm form-2 border-0 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text border-0 bg-none" id="basic-addon1">
            <i className="fa fa-search text-grey" aria-hidden="true" />
          </span>
        </div>
        <input
          className=" form-control my-0 py-md-1 border-0  bg-search"
          ref={inputRef}
          value={searchEnter}
          onChange={(event) => setSearchEnter(event.target.value)}
          type="search"
          placeholder="Search Products"
        />
    </div> */}
      <div class="input-group ml-4 solveaz-search">
  <div class="input-group-prepend radius-left bg-primary px-4 d-flex align-items-center ">
  <i className="fa fa-search text-white" aria-hidden="true" />
  </div>
  <input className=" form-control radius-right my-0 py-md-1 border-0 "
          ref={inputRef}
          value={searchEnter}
          onChange={(event) => setSearchEnter(event.target.value)}
          type="search"
          placeholder="Search Products"/>
</div>

      
      
      {/* Search Result */}
      {products}
    </div>
  );
};

export default Search;
