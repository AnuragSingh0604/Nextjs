import Product from "../components/product";
import Review from "../components/review";
import {Suspense} from "react";
export default function ProductReviews(){
  return(
   <div>
   <h1>Product reviews</h1>
  <Suspense fallback={<p>Loading product details</p>}>
   <Product></Product>;
   </Suspense>
   <Suspense fallback={<p>review is loading</p>}>
   <Review></Review>;
   </Suspense>
   </div>
  
  )
}