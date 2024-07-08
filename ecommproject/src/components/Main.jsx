import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart, EmptyCart } from "../redux/Action";
import { productList } from "../redux/ProductAction";
import "./main.css"; 

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main component from the saga", data);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);



  return (
    <div className="container">
     
      <div>
        <button className="button" onClick={() => dispatch(EmptyCart())}>
          Empty Cart
        </button>
      </div>
      
      <div className="product-list">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img className="image" src={item.image} alt={item.name} />
            <p className="title">Title: {item.title}</p>
            <p>Category: {item.category}</p>
            <p>Description: {item.description}</p>
            <p className="price">Price: {item.price}</p>
            <div className="rating">
              <p>Rating: </p>
              <p className="rate">{item.rating.rate}</p>
              <p>({item.rating.count} reviews)</p>
            </div>
            <div>
            <button className="button" onClick={() => dispatch(addToCart(item))}>
        Add To Cart
      </button>
      
        <button
          className="button"
          onClick={() => dispatch(removeToCart(item.id))}
        >
          Remove To Cart
        </button>
      
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
