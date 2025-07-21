// ShopCatagorey.js
import React, { useContext } from "react";
import "../pages/CSS/ShopCatagorey.css";
import { Shopcontext } from "../context/Shopcontext";
import dropdown_icon from "../components/img/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCatagorey = (props) => {
  const { all_product } = useContext(Shopcontext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="category banner" />
      
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCatagorey;
