"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./estyles.scss";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-card__image" />
      <h3 className="event-card__title">{title}</h3>
      <p className="event-card__description">{description}</p>
    </div>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      title: "Event 1",
      description: "Description for event 1",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 2",
      description: "Description for event 2",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 3",
      description: "Description for event 3",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 4",
      description: "Description for event 4",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 5",
      description: "Description for event 5",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 6",
      description: "Description for event 6",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 7",
      description: "Description for event 7",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 8",
      description: "Description for event 8",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
    {
      title: "Event 9",
      description: "Description for event 9",
      image:
        "https://static.ybox.vn/2022/6/5/1654226068984-hr-mindx-avatar.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + events.length) % events.length);
  };

  let visibleEvents = events.slice(
    currentIndex,
    Math.min(currentIndex + 4, events.length)
  );
  if (visibleEvents.length < 4) {
    visibleEvents = [...visibleEvents, ...events.slice(0, 4 - visibleEvents.length)];
  }

  return (
    <div className="app">
      <div className="app__content">
        <button onClick={handlePrev} className="prev-btn">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {visibleEvents.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
        <button onClick={handleNext} className="next-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Events;
