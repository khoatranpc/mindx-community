import React from 'react';
import './estyles.scss';

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
      title: 'Event 1',
      description: 'Description for event 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVLGzO55RQXipmjnUPh09YUtP-BW3ZTUeAA&s',
    },
    {
      title: 'Event 2',
      description: 'Description for event 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVLGzO55RQXipmjnUPh09YUtP-BW3ZTUeAA&s',
    },
    {
      title: 'Event 3',
      description: 'Description for event 3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVLGzO55RQXipmjnUPh09YUtP-BW3ZTUeAA&s',
    },
  ];

  return (
    <div className="app">
      <div className="app__content">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;