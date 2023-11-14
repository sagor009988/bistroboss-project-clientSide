import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import Sections from "../../../Components/Section/Sections";

const Category = () => {
  return (
    <section>
        <Sections subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
        
        >
           
        </Sections>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-3xl text-center text-white -mt-12 font-bold">
            SALAD
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-3xl text-center text-white -mt-12 font-bold">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-3xl text-center text-white -mt-12 font-bold">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-3xl text-center text-white -mt-12 font-bold">
            Desearts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-3xl text-center text-white -mt-12 font-bold">
            SALAD
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
