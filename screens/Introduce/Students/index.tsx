"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import "./styles.scss";
import { Rate } from "antd";

const Students = () => {
  const [cards] = useState([
    {
      id: 1,
      name: "Tiến Dũng",
      review: "Giảng viên tận tình, chương trình khoa học",
      rating: 4.5,
      avatar:
        "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
    },
    {
      id: 2,
      name: "Gia Khoa",
      review: "Cơ sở vật chất tốt, thầy cô chuyên môn cao",
      rating: 5,
      avatar:
        "https://cdn-icons-png.flaticon.com/512/201/201818.png",
    },
    {
      id: 3,
      name: "Phú Đức",
      review: "Giảng viên nhiệt tình, các khoá học hơi nhanh",
      rating: 3.5,
      avatar:
        "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
    },
    {
      id: 4,
      name: "Anh Thư",
      review: "Nhiều chương trình thú vị và bổ ích cho học viên",
      rating: 4,
      avatar:
        "https://i.pinimg.com/564x/e1/1e/a0/e11ea048414928f0cc395f2c83676229.jpg",
    },
    {
      id: 5,
      name: "Quang Huy",
      review: "Bạn học thân thiện, trung tâm nhiệt tình",
      rating: 4.5,
      avatar:
        "https://i.pinimg.com/564x/ee/4d/74/ee4d741756d7f8868c71ad071250cad4.jpg",
    },
    {
      id: 6,
      name: "Hà My",
      review: "Anh chị giảng viên nhiệt tình, có nhiều sự kiện",
      rating: 4.5,
      avatar:
        "https://cdn-icons-png.flaticon.com/512/2995/2995470.png",
    },
  ]);

  const swiperRef = useRef(null);
  const swiperInstance = useRef<SwiperType | null>(null);

  const slideToNext = useCallback(() => {
    if (swiperInstance.current) {
      swiperInstance.current.slideToLoop((swiperInstance.current.realIndex + 1) % (cards.length - 2), 1000, true);
    }
  }, [cards, swiperInstance]);

  useEffect(() => {
    const intervalId = setInterval(slideToNext, 4000);
    return () => clearInterval(intervalId);
  }, [slideToNext]);

  const swiperInstanceCallback = useCallback((swiper: SwiperType) => {
    swiperInstance.current = swiper;
  }, []);

  return (
    <div className="card-container">
      <Swiper
        ref={swiperRef}
        loop={true}
        slidesPerView={3}
        spaceBetween={10}
        onSwiper={swiperInstanceCallback}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={card.id}>
            <div className="card">
              <div className="avatar">
                <img src={card.avatar} alt="Avatar" />
              </div>
              <div className="card-content">
                <h2 className="name-opti">{card.name}</h2>
                <div className="rating">
                  <Rate disabled allowHalf defaultValue={card.rating} />
                </div>
                <div className="review">
                  <h3>{card.review}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Students;