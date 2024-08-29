"use client";
import React, { useState } from "react";
import IntroduceLayout from "@/layouts/IntroduceLayout";
import "./styles.scss";

const Introduce = () => {
  const [comments, setComments] = useState<{ text: string; date: string; name: string }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [newCommenterName, setNewCommenterName] = useState("");
  const [notableEvents, setNotableEvents] = useState([
    { title: "Event 1", description: "Description 1" },
    { title: "Event 2", description: "Description 2" },
  ]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([
      ...comments,
      { text: newComment, date: new Date().toLocaleString(), name: newCommenterName },
    ]);
    setNewComment("");
    setNewCommenterName("");
  };
  const NotableEvent = ({ title, description }: { title: string; description: string }) => (
    <div className="notable-event">
      <h3 className="text-[1.8rem]">{title}</h3>
      <p className="text-[1.4rem]">{description}</p>
    </div>
  );

  return (
    <IntroduceLayout>
      <div className="banner p-[5.6rem]">
        <div className="row flex items-center gap-[2.4rem]">
          <div className="des w-[60%]">
            <h1 className="text-[3.2rem] font-medium mb-[2.4rem]">
              <span className="text-[var(--base)] font-bold">
                Event Title
              </span>
            </h1>
            <img src="https://promice.vn/storage/uploads/20210528-untitled-design-19.png" alt="Intro Image" className="intro-image" /> {/* 3. Hình ảnh giới thiệu */}
            <p className="text-[1.8rem] mb-[2.4rem]"> {/* 4. Mô tả */}
              Event description...
            </p>
            <p className="text-[2.8rem]  mb-[1.2rem]">
              Nền tảng dành cho học viên của MindX
              <span>
              </span>
            </p>
            <p className="text-[var(--bs-color)] text-[1.8rem] mb-[2.4rem]">
              Xuất phát từ nhu cầu kết nối, học hỏi từ học viên của MindX, nền
              tảng được xây dựng với mục tiêu là cánh cổng giúp học viên, doanh
              nghiệp, giảng viên có thể kết nối, chia sẻ với nhau
            </p>
            <h2 className="text-[2.4rem] font-bold mb-[2.4rem] text-[var(--base)]">
              Comments
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newCommenterName}
                onChange={(e) => setNewCommenterName(e.target.value)}
                placeholder="Tên của bạn..."
                className="w-full p-[1.2rem] mb-[2.4rem] border border-gray-300 rounded"
              />
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Viết bình luận..."
                className="w-full p-[1.2rem] mb-[2.4rem] border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-[var(--base)] text-white p-[1.2rem] rounded"
              >
                Gửi bình luận
              </button>
            </form>
            
            <div className="comments">
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p className="text-[1.8rem] mb-[1.2rem]">
                    {comment.name}: {comment.text}
                  </p>
                  <p className="text-[1.4rem] text-gray-500">{comment.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="notable-events w-[40%]">
            {notableEvents.map((event, index) => (
              <NotableEvent key={index} title={event.title} description={event.description} />
            ))}
          </div>
        </div>
      </div>
    </IntroduceLayout>
  );
};

export default Introduce;