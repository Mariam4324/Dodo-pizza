// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import css from "./Sliders.module.scss";
import sliderImg1 from "../../assets/slider_1.webp";
import sliderImg2 from "../../assets/slider_2.webp";
import sliderImg3 from "../../assets/slider_3.webp";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Container } from "../../layout/Container/Container";

export const Sliders = () => {
  return (
    <Container>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            maxWidth: 1060,
          }}
        >
          <img src={sliderImg1} />
        </SwiperSlide>
        <SwiperSlide
          style={{
            maxWidth: 1060,
          }}
        >
          <img src={sliderImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={css.slider__img} src={sliderImg3} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
