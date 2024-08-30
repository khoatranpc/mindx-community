'use client'
import React from "react";
import "./styles.scss";
import { useRouter } from 'next/navigation';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image, link, className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div className={`event-card ${className}`} onClick={handleClick}>
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
      title: "Back to school",
      description: "Chào đón năm học mới cùng MindX",
      image:
        "https://images-proxy.mindx.edu.vn/1120x,webp/https://website-dev.hn.ss.bfcplatform.vn/16x9_LOGO_aa05e28c5c.png",
      link: "", 
    },
    {
      title: "November Sale",
      description: "Siêu ưu đãi dành cho học viên",
      image:
        "https://website-dev.hn.ss.bfcplatform.vn/Asset_1_4c4ce95f5c.png",
      link: "",
    },
    {
      title: "Cơ hội tìm kiếm việc làm",
      description: "Ngày hội tuyển dụng của MindX Technology School",
      image:
        "https://images.careerviet.vn/employer_folders/lot5/225545/105358screenshot2023-08-17at10-47-20.png",
      link: "",
    },
    {
      title: "Young Talent",
      description: "Khoá học lập trình mới cho tài năng trẻ",
      image:
        "https://mindxcantho.edu.vn/wp-content/uploads/2023/09/2-mindx-can-tho-mo.png",
      link: "",
    },
    {
      title: "Đồng hành cùng MindX",
      description: "Vượt chướng ngại vật, đón chào năm học mới",
      image:
        "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/455240468_797255082604605_181694098130779425_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtgSrAt-nJFSY_7Uu1AjK4GjeWkYGemFgaN5aRgZ6YWG4rP9q0vPYws8XuyyaWAu1-fhPm9rm6zBwjJtlGV413&_nc_ohc=n5IgndeOPQUQ7kNvgGhcNpO&_nc_ht=scontent.fhan17-1.fna&oh=00_AYDP-yM8Mn4Kw01YVggaULGhShmUsHHyX0_GcEtdk7D9Mg&oe=66D5EC2B",
      link: "",
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