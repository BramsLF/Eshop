import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "../context/AppContext";
import DateComponent from "../components/DateComponent";
import Menu from "@components/Menu";
import "@styles/Checkout.scss";

const Checkout = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>{<DateComponent/>}</span>
              <span>
                {cart.length} {cart.length === 1 ? "article" : "articles"}
              </span>
            </p>
            <p>
              $
              {cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)}
            </p>
          </div>
          <div className="Order-list">
            {cart.map((product, index) => (
              <OrderItem
                key={`${product.id}-${index}`}
                product={product}
                indexValue={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
