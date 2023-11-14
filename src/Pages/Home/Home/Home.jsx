import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopulaarMenu/PopularMenu';
import BistoText from './BistoText/BistoText';
import Contact from './Contact/Contact';
import Recomend from './Recomend/Recomend';
import Feature from './FeaturePost/Feature';
import Testimunial from './Testimunial/Testimunial';
import { Helmet} from "react-helmet-async";

const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Bisto | Home</title>
            </Helmet>  
         <Banner></Banner>
         <Category></Category>
         <BistoText></BistoText>
         <PopularMenu></PopularMenu>
         <Contact></Contact>
         <Recomend></Recomend>
         <Feature></Feature>
         <Testimunial></Testimunial>
        </div>
    );
};

export default Home;