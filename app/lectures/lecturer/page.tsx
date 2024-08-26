"use client";
import React, { useContext } from "react";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import { UserOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { EnvironmentFilled } from "@ant-design/icons";
import { BookOutlined } from "@ant-design/icons";
import { ReadFilled } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";
import { UserContext } from "../page";
import "./style.scss";

export function CoLogo() {
  return (
    <Image src={"/logo.png"} className="CoLogo" alt="" width={56} height={55} />
  );
}
const LecturerDetails = () => {
  const lecturers = useContext(UserContext);
  console.log(lecturers);

  const crrUrl = window.location.href;
  const id = crrUrl.split("?")[1];
  const crrLecturer = lecturers.find((item) => String(item.id) === String(id));

  // const crrLecturer =

  return (
    <div className="teacher-pf">
      <div className="pf-banner w-fit m-auto">
        <div className="left">
          <h1 className="pr-introduce text-6xl">
            Hi, tôi là <span className="redtext">{crrLecturer?.name}</span>
          </h1>
          <h1 className="pr-career text-4xl redtext">{crrLecturer?.course}</h1>
          <p className="pr-discription text-2xl redtext">
            {crrLecturer?.description}
          </p>
          <div className="full-red-box text-2xl pl-9 py-4 gap-2 flex flex-col justify-center tracking-wider">
            <h1>Lập trình viên FullStack</h1>
            <h1>Kỹ sư phần mềm</h1>
            <h1>Game Developer</h1>
          </div>
        </div>
        <div className="right">
          <div className="up-highlight">
            <div className="wrapper">
              <div className="blankbox"></div>
              <div className="ComLogo"></div>
              {/* <CoLogo /> */}
            </div>
          </div>
          <div className="down-highlight flex items-end justify-center"></div>
          <div
            className="teacher-img"
            style={{
              backgroundImage:
                "url(https://images.squarespace-cdn.com/content/v1/54ee6b54e4b094722873774d/1651271676233-EJSOCKU9OE5ZKGALLAH4/232.jpg?format=2500w)",
            }}
          >
            <div className="quoteOfLife text-xl mb-3">
              "{crrLecturer?.quoteOfLife}" <strong>- Quote Of Life</strong>
            </div>
          </div>
          <div className="avatar-rating">
            <div
              className="avatar"
              style={{
                backgroundImage:
                  "url(https://images.squarespace-cdn.com/content/v1/54ee6b54e4b094722873774d/1651271676233-EJSOCKU9OE5ZKGALLAH4/232.jpg?format=2500w)",
              }}
            ></div>
            <div className="rating">
              <div className="rating-score text-2xl">4.0</div>
              <div className="rating-star">
                <StarRating className="Star" rate={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-follow">
        <div className="opacity50"></div>
        <div className="achivement-pf text-4xl">
          <ul className="pf-list">
            <li>
              <div className="item">
                <span className="num">200 +</span>
                <span>Thành tựu</span>
              </div>
            </li>
            <li>
              <div className="item">
                <span className="num">1.000 +</span>
                <span>học sinh được tôi đào tạo</span>
              </div>
            </li>
            <li>
              <div className="item">
                <span className="num">20 +</span>
                <span>năm kinh nghiệm</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="wrapper m-auto">
          <div
            className="picground"
            style={{
              backgroundImage:
                "url(https://images.squarespace-cdn.com/content/v1/54ee6b54e4b094722873774d/1651271676233-EJSOCKU9OE5ZKGALLAH4/232.jpg?format=2500w)",
            }}
          ></div>
          <div className="lbl text-3xl tracking-wide font-bold">
            <h3>THÔNG TIN GIẢNG VIÊN</h3>
          </div>
          <div className="details mt-24 ml-20 flex flex-col justify-center">
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <UserOutlined
                    style={{ color: "#bb0409", fontSize: "3.6rem" }}
                  />
                </div>
                <div className="text text-2xl ml-4">
                  <strong>Họ và tên:</strong>
                  <div className="mt-2 small text-2xl">{crrLecturer?.name}</div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <EnvironmentFilled
                    style={{ color: "#bb0409", fontSize: "3.6rem" }}
                  />
                </div>
                <div className="text text-2xl ml-4">
                  <strong>Nơi công tác: </strong>
                  <div className="mt-2 small text-2xl">
                    {crrLecturer?.workAt}
                  </div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <BookOutlined
                    style={{ color: "#bb0409", fontSize: "3.6rem" }}
                  />
                </div>
                <div className="text text-2xl ml-4">
                  <strong>Trình độ học vấn: </strong>
                  <div className="mt-2 small text-2xl">
                    {crrLecturer?.levelOfEducation}
                  </div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <ReadFilled
                    style={{ color: "#bb0409", fontSize: "3.6rem" }}
                  />
                </div>
                <div className="text text-2xl ml-4">
                  <strong>Môn dạy: </strong>
                  <div className="mt-2 small text-2xl">
                    Lập trình Fullstack, Python, Java,...
                  </div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <FacebookOutlined
                    style={{ color: "#bb0409", fontSize: "3.6rem" }}
                  />
                </div>
                <div className="text text-2xl ml-4">
                  <strong>Trang cá nhân: </strong>
                  <a href="" className="mt-2 small text-2xl block blue">
                    {crrLecturer?.facebook}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-story mt-12">
        <div className="story-wrapper">
          <h1 className="story-title w-fit text-4xl m-auto font-bold">
            Đôi điều về giảng viên
          </h1>
          <div className="main mt-8 mx-auto">
            <div
              className="pic-frame"
              style={{
                backgroundImage:
                  "url(https://images.squarespace-cdn.com/content/v1/54ee6b54e4b094722873774d/1651271676233-EJSOCKU9OE5ZKGALLAH4/232.jpg?format=2500w)",
              }}
            ></div>
            <div className="pf-content">
              <div className="text ml-32 pt-20">
                <h1 className="text-4xl font-bold">Đời sống</h1>
                <p className="text-2xl">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium ex vero atque voluptates non accusamus delectus
                  dolores nemo esse a vitae est eaque laborum nulla, dolor
                  doloribus aliquid consequuntur voluptas. Veritatis, animi
                  consequuntur. Ab libero natus minus maxime error rerum
                  quibusdam dignissimos beatae porro? <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, voluptatem eum earum rerum suscipit esse
                  repellendus itaque exercitationem voluptatibus ut. Culpa
                  tempore sint tempora aspernatur libero, officiis distinctio
                  fugiat quidem nihil fuga cupiditate molestias earum, quisquam
                  dolorem similique eligendi. Neque rerum quas nam aliquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-feedback w-full mt-28">
        <div className="wrapper w-full flex flex-col items-center justify-center">
          <div className="header mb-10 flex flex-col items-center">
            <div className="feedback-title text-3xl font-bold ">
              Những điều học sinh nói
            </div>
            <div className="line mt-6 flex items-center justify-center gap-8">
              <div className="left"></div>
              <div className="middle">
                <StarFilled style={{ fontSize: "1.5rem", color: "#bb0409" }} />
              </div>
              <div className="right"></div>
            </div>
          </div>
          <div className="student-feedback gap-4 text-justify tracking-wide leading-6 text-2xl flex flex-col items-center justify-center">
            <div className="body gap-4 flex flex-col items-center justify-center">
              <div className="comment font-bold ">Thầy dạy rất tận tâm</div>
              <div className="content">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur pretium dui sed urna rhoncus porttitor. Donec
                ultricies tellus ex, sed finibus nisi fermentum non. Etiam vel
                pulvinar neque. Maecenas lacinia mi ut nisl auctor lacinia.
                Mauris tristique nisi vel massa mattis sollicitudin. Maecenas
                urna purus, tempor non ex vel, malesuada lacinia lorem.”
                <strong> - Nhữ Nguyên</strong>
              </div>
              <div className="line flex items-center justify-center gap-8">
                <div className="left"></div>
                <div className="middle">
                  <StarFilled
                    style={{ fontSize: "1.5rem", color: "#bb0409" }}
                  />
                </div>
                <div className="right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerDetails;
