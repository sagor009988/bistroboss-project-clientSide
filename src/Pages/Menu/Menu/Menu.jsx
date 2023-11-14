import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import coverimg from "../../../assets/menu/banner3.jpg";
import desertimg from "../../../assets/menu/dessert-bg.jpeg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";
import { Parallax } from "react-parallax";
import useMenu from "../../../Hooks/useMenu";
import Sections from "../../../Components/Section/Sections";
import MenuCard from "../../../Shared/MenuCard";
import MenuCategory from "../../../Shared/MenuCategory/MenuCategory";

const Menu = () => {
  const [menus] = useMenu();
  const offer = menus.filter((item) => item.category === "offered");
  const desserts = menus.filter((item) => item.category === "dessert");
  const salad = menus.filter((item) => item.category === "salad");
  const drinks = menus.filter((item) => item.category === "drinks");
  const soup= menus.filter((item) => item.category === "soup");
  const pizza = menus.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bisto | Menu</title>
      </Helmet>
      <Cover img={coverimg} title="Our menu"></Cover>
      {/* main cover */}
      <section>
        <Sections
          subHeading="---Don't miss---"
          heading="TODAY'S OFFER"
        ></Sections>
        <MenuCategory items={offer}></MenuCategory>
      </section>
      {/* desert menu items */}
     <MenuCategory
     items={desserts}
     title="dessert"
     coverimg={desertimg}
     ></MenuCategory>

     {/* salad */}
     <MenuCategory
     items={salad}
     title="salad"
     coverimg={saladimg}
     ></MenuCategory>
     <MenuCategory
     items={pizza}
     title="pizza"
     coverimg={pizzaimg}
     ></MenuCategory>
     <MenuCategory
     items={soup}
     title="soup"
     coverimg={soupimg}
     ></MenuCategory>
    </div>
  );
};
export default Menu;
