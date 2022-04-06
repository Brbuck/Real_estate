import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Container } from "./styles.js";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function SwiperSlider({ Data }) {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={false}
        navigation={true}
        /* pagination={{
          clickable: true,
        }} */
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {Data?.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item?.photo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
