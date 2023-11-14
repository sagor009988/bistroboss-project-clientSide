import React from 'react';

const MenuCard = ({menuItem}) => {
    const {image,recipe,name,price}=menuItem || {}
    return (
        <div>
            <div className='flex gap-8'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-24' src={image} alt="" />
            <div className='flex space-x-4'> 
                <div>
                <h1 className='uppercase font-semibold'>{name}--------</h1>
                <p>{recipe}</p>
                </div>
                <p className='font-bold text-orange-600'>${price}</p>
            </div>
            
        </div>
       
        </div>
    );
};

export default MenuCard;