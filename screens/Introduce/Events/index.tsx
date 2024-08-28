import React from "react";
import "./styles.scss";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image, className }) => {
  return (
    <div className={`event-card ${className}`}>
      <div className="event-card__overlay"></div>
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
        "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg",
    },
    {
      title: "Event 2",
      description: "Description for event 2",
      image:
        "https://thuvien.hocviennhiepanh.com/wp-content/uploads/37177573_10156528970182840_1475777593566298112_o.jpg",
    },
    {
      title: "Event 3",
      description: "Description for event 3",
      image:
        "https://thuvien.hocviennhiepanh.com/wp-content/uploads/37177573_10156528970182840_1475777593566298112_o.jpg",
    },
    {
      title: "Event 4",
      description: "Description for event 4",
      image:
        "https://thuvien.hocviennhiepanh.com/wp-content/uploads/37177573_10156528970182840_1475777593566298112_o.jpg",
    },
    {
      title: "Event 5",
      description: "Description for event 5",
      image:
        "https://thuvien.hocviennhiepanh.com/wp-content/uploads/37177573_10156528970182840_1475777593566298112_o.jpg",
    },
  ];

  return (
    <div className="app">
      <div className="app__content">
        <div className="event-grid">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              {...event}
              className={`event-card-${index + 1} ${index < 2 ? "event-card--large" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;