import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import order from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import OrderFoodCard from "./OrderFoodCard";
import OrderTabShare from "./OrderTabShare";
import { useParams } from "react-router-dom";

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();
    const {category}=useParams()
    console.log(category);
   
  const offer = menus.filter((item) => item.category == "offered");
  const desserts = menus.filter((item) => item.category == "dessert");
  const salad = menus.filter((item) => item.category == "salad");
  const drinks = menus.filter((item) => item.category == "drinks");
  const soup= menus.filter((item) => item.category == "soup");
  const pizza = menus.filter((item) => item.category == "pizza");
  console.log(salad);
  
  return (
    <div className="">
      <Cover img={order} title="Food Order"></Cover>
      <Tabs className="mt-5 mb-2" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
         
        </TabList>
        <TabPanel>
           <OrderTabShare items={salad}></OrderTabShare>
        </TabPanel>
        <TabPanel>
            <OrderTabShare items={pizza}></OrderTabShare>
        </TabPanel>
        <TabPanel>
            <OrderTabShare items={soup}></OrderTabShare>
        </TabPanel>
        <TabPanel>
            <OrderTabShare items={desserts}></OrderTabShare>
        </TabPanel>
        <TabPanel>
            <OrderTabShare items={drinks}></OrderTabShare>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default OrderFood;
