import React, { useEffect, useState } from "react";
import Sections from "../../../Components/Section/Sections";
import { data } from "autoprefixer";
import useMenu from "../../../Hooks/useMenu";
import MenuCard from "../../../Shared/MenuCard";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");

  // const [menus,setMenus]=useState([])
  // useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         const popularItems=data.filter(data=>data.category === "popular")
  //         setMenus(popularItems)
  //         console.log(popularItems);
  //     })
  // },[])

  return (
    <section className="my-8">
      <Sections
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></Sections>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popular.map((menuItem) => (
          <MenuCard key={menuItem._id} menuItem={menuItem}></MenuCard>
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-5">
      <button className='btn justify-center btn-outline  border-0 border-b-2'>Show More</button>
      </div>
    </section>
  );
};

export default PopularMenu;
