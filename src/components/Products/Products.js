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
    fetch("https://fakestoreapi.com/products").then(
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