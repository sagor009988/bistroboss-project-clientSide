import OrderFoodCard from "./OrderFoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const OrderTabShare = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            {
            items.map(item=><OrderFoodCard key={item._id} item={item}></OrderFoodCard>)
         }
        </div>
    );
};

export default OrderTabShare;