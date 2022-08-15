import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import CartItem from "./cartItem";
import { useState } from "react";

function App() {
  let products = [
    {
      id: 1,
      title: "iPhone",
      price: 30000,
      rating: 5,
    },
    {
      id: 2,
      title: "Samsung",
      price: 25000,
      rating: 3,
    },
    {
      id: 3,
      title: "onePlus",
      price: 28000,
      rating: 4,
    },
    {
      id: 4,
      title: "Redmi",
      price: 20000,
      rating: 5,
    },
    {
      id: 5,
      title: "Poco",
      price: 27000,
      rating: 3,
    },
    {
      id: 6,
      title: "Vivo",
      price: 22000,
      rating: 2,
    },
  ];

  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);

  let addToCart = (item) => {
    setcart([...cart, item]);
    settotal(total + item.price);
  };

  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setcart([...cart]);
    settotal(total - item.price);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {products.map((item) => {
              return <Card item={item} cart={cart} addToCart={addToCart} />;
            })}
          </div>
        </div>
        <div className="col-lg-4 mt-2">
          {cart.length === 0 ? (
            <div>No items in Cart</div>
          ) : (
            <div className="row">
              <ol class="list-group list-group-numbered">
                {cart.map((cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      removeFromCart={removeFromCart}
                    />
                  );
                })}
              </ol>
              <h1>Total - {total}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
