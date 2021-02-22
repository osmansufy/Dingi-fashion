import React, { useEffect, useState ,Suspense} from 'react'




import Banner from '../container/Banner';
// import PopulerProducts from '../container/PopulerProducts';
import PreOrders from '../container/PreOrder'
import FeaturedCategory from '../container/FeaturedCategory'
import Spinner from '../container/Spinner/Spinner'
import Ads from '../container/Ads';
import FeaturedProducts from '../container/FeaturedProducts';


const Category = React.lazy(() => import('../container/Category'));
const PopulerProducts = React.lazy(() => import('../container/PopulerProducts'));
// const PreOrders = React.lazy(() => import('../container/PreOrder'));
function Home(props){
console.log(props)
    return(<>


          {<Banner />}
     
         {/* {<Suspense fallback={<h5>Loading...</h5>}><Category/></Suspense>} */}
         <FeaturedCategory />
         <Ads />
         {<Suspense fallback={<h5>Loading...</h5>}><PopulerProducts /></Suspense>}
         <FeaturedProducts />
         {/* {<Suspense fallback={<Spinner />}> */}
               <PreOrders />
               {/* </Suspense>} */}
         
         
      </>
        
        
      );
}

export default Home