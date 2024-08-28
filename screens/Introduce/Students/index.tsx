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
      name: "Phạm Tiến Dũng",
      review: "Review 1",
      rating: 2.5,
      avatar:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    {
      id: 2,
      name: "Dũng Phạm",
      review: "Review 2",
      rating: 5,
      avatar:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    {
      id: 3,
      name: "Phạm Dũng",
      review: "Review 3",
      rating: 3.5,
      avatar:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    {
      id: 4,
      name: "Tiến Dũng",
      review: "Review 4",
      rating: 4,
      avatar:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    {
      id: 5,
      name: "Dũng",
      review: "Review 5",
      rating: 4.5,
      avatar:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    {
      id: 6,
      name: "MindX Student",
      review: "Review 6",
      rating: 1.5,
      avatar:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
  ]);

  const swiperRef = useRef(null);
  const swiperInstance = useRef<SwiperType | null>(null);

  const slideToNext = useCallback(() => {
    if (swiperInstance.current) {
      swiperInstance.current.slideToLoop((swiperInstance.current.realIndex + 1) % (cards.length - 2), 300, true);
    }
  }, [cards, swiperInstance]);

  useEffect(() => {
    const intervalId = setInterval(slideToNext, 3000);
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