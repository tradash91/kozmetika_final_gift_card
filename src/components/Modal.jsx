import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function GalleryModal({ open, onClose, items }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          aspernatur aliquam rerum suscipit harum cupiditate architecto dolor
          officia reiciendis quisquam, nulla nam est, facere vitae quas odit
          eligendi nemo quis explicabo iure iste natus sequi repudiandae? Magnam
          ducimus pariatur cupiditate!
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
