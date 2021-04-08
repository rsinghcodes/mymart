import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import "./SwiperBanner.css";

//https://github.com/valnub/swiper-react-demo/blob/master/src/ -- Demo code on github

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function SwiperBanner() {
  return (
    <React.Fragment>
      <Swiper
        id="main"
        thumbs={{ swiper: null }}
        controller={{ control: null }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide key="Slide 1" tag="li">
          <img
            src={`https://www.jiomart.com/images/cms/aw_rbslider/slides/1617212391_Homepage_maintheme_web.jpg`}
            style={{ listStyle: "none" }}
            alt={`Hello`}
          />
        </SwiperSlide>
        <SwiperSlide key="Slide 2" tag="li">
          <img
            src={`https://www.jiomart.com/images/cms/aw_rbslider/slides/1617203121_summer_web.jpg`}
            style={{ listStyle: "none" }}
            alt={`Hello`}
          />
        </SwiperSlide>
        <SwiperSlide key="Slide 3" tag="li">
          <img
            src={`https://www.jiomart.com/images/cms/aw_rbslider/slides/1616779802_women_web.jpg`}
            style={{ listStyle: "none" }}
            alt={`Hello`}
          />
        </SwiperSlide>
        <SwiperSlide key="Slide 4" tag="li">
          <img
            src={`https://www.jiomart.com/images/cms/aw_rbslider/slides/1617211646_oralweb.jpg`}
            style={{ listStyle: "none" }}
            alt={`Hello`}
          />
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}

export default SwiperBanner;
