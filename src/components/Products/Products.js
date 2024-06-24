import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import React from "react";
import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
function Products() {

  let [products, setProducts] = useState([]);
  console.log("products")
  console.log(useWindowSize());
  useEffect(() => {
    fetch("https://run.mocky.io/v3/0912a49d-ab8c-4aa2-9363-d1d21fd3f66a").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])

  
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item, index) {
                  return (<ProductCard key={index}  product={item} />)
                })
            }
        </div>
    )
}
export default React.memo(Products);