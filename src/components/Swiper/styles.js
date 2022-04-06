import styled from "styled-components";

export const Container = styled.div`
.swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    
  }

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  background-size: cover;
  background-position: center;
  padding: 0px 6px;
  //margin-left: 10px;
  
}

.mySwiper {
  height: 300px;
  box-sizing: border-box;
  padding: 10px 0;
}

/* .mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
} */


/* @media only screen and (min-width: 769px) {
  .swiper-slide:first-child {
    transition: transform 100ms;
  }

  .swiper-slide:first-child img {
    transition: box-shadow 500ms;
  }

  .swiper-slide.swiper-slide-active:first-child {
    transform: translateX(50%);
    z-index: 2;
  }

  .swiper-slide.swiper-slide-active:first-child img {
    box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
  }

  .swiper-slide:nth-child(2) {
    transition: transform 100ms;
  }

  .swiper-slide.swiper-slide-next:nth-child(2) {
    transform: translateX(55%);
    z-index: 1;
  }

  .swiper[dir="rtl"] .swiper-slide.swiper-slide-active:first-child {
    transform: translateX(-50%);
  }

  .swiper[dir="rtl"] .swiper-slide.swiper-slide-next:nth-child(2) {
    transform: translateX(-55%);
  }
 */
  
`;
