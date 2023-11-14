import React from "react";

const OrderFoodCard = ({item}) => {
    console.log(item);
    const {image,recipe,name,price}=item|| {}
  return (
    <div>
      <div className="card card-compact mr-4 mb-5 gap-5 bg-base-100 shadow-xl">
        <figure>
          <img className="relative h-64 w-full "
            src={image}
          />
        </figure>
        <p className="bg-black right-0 p-1 text-white absolute">price ${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions w-full">
            <button className="btn btn-outline border-b-4 border-0 border-b-orange-400">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
