import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div className='mb-10 container mx-auto'>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/SBGHjy7/photo-1565402170291-8491f14678db-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/zsRbt4s/photo-1560448204-e02f11c3d0e2-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/26TwVf4/premium-photo-1675324517011-24d2c741c22f-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/6JQh5md/photo-1486406146926-c627a92ad1ab-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://unsplash.com/photos/white-and-brown-concrete-building-under-blue-sky-during-daytime-_TPTXZd9mOo" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/2gqvzxC/photo-1512699355324-f07e3106dae5-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" /></SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Slider;