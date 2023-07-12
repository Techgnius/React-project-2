import React from "react";
import Items from "../../items.jsx";
import { Item } from "./item.jsx";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>
          Chinedu<span>Store</span>
        </h1>
      </div>
      <div className="items">
        {Items.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
