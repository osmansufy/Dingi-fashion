import Axios from '../axios';
import React, { useEffect, useState } from 'react';
import SinglePreOrder from '../component/SinglePreOrder';

function PreOrder(props) {
  const [preOrders,setPreOrders]=useState([])

  const getPreOrders=async()=>{
    Axios.get('catalogue/product/public/?pre_order=1').then(response=>{
      setPreOrders(response.data)
    })
  }
  useEffect(()=>{
getPreOrders()
  },[])
    return (
        <section>
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12">
                <h3 className="section-title">Pre-Order Products</h3>
                </div>
              </div>
              {
                preOrders?.length>0 ? 
                <div className="row">
                {preOrders && preOrders.map((item,index)=>(
                  <SinglePreOrder data={item} key={index} />

                ))}
                </div>
                : <h5 className="text-center bg-primary my-2 py-5">Not Found Any PreOrder Products </h5>
              }
          
            </div>
          </section>
    );
}

export default PreOrder;