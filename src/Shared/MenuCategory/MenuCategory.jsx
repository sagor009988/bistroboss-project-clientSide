import React from "react";
import MenuCard from "../MenuCard";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items,title,coverimg }) => {
  return (
    <div>
       {title && <Cover img={coverimg} title={title}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items?.map((menuItem) => (
          <MenuCard key={menuItem._id} menuItem={menuItem}></MenuCard>
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-5">
        <Link to={`/order/${title}`}>
        <button className="btn justify-center btn-outline  border-0 border-b-2">
          Buy Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
