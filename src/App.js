import React from "react";

// App CSS
import "./App.css";

// products data
import products from "./products";

// import Card template
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1 className="title">I nostri prodotti</h1>
      <div className="product-list">
        {products.map((product) => (
          <Card
            imgURL={product.imgURL}
            brand={product.brand}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
