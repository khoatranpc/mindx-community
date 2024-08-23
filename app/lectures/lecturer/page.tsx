"use client";
import React from "react";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import { UserOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { EnvironmentFilled } from "@ant-design/icons";
import { BookOutlined } from "@ant-design/icons";
import { ReadFilled } from "@ant-design/icons";
import "./style.scss";

export function CoLogo() {
  return (
    <Image src={"/logo.png"} className="CoLogo" alt="" width={56} height={55} />
  );
}
// export function AchiveBanner() {
//     return (
//         <Image src={"/achievement-banner.png"} className="achiveBanner" alt="" width={1440} height={363}/>
//     )
// }
const Lecturer = (props: String) => {
  return (
    <div className="teacher-pf">
      <div className="pf-banner w-fit m-auto">
        <div className="left">
          <h1 className="pr-introduce text-6xl">
            Hi, tôi là <span className="redtext">Nguyễn Văn Cường</span>
          </h1>
          <h1 className="pr-career text-4xl redtext">
            Lập trình viên FullStack
          </h1>
          <p className="pr-discription text-2xl redtext">
            Có 10 năm kinh nghiệm trong ngành lập trình phần mềm, đã có chứng
            chỉ nghiệp vụ sư phạm đạt xuất sắc
          </p>
          <div className="full-red-box"></div>
        </div>
        <div className="right">
          <div className="up-highlight">
            <div className="wrapper">
              <div className="blankbox"></div>
              <CoLogo />
            </div>
          </div>
          <div className="down-highlight"></div>
          <img
            src="https://picsum.photos/362/452"
            alt=""
            className="teacher-img"
          />
          <div className="avatar-rating">
            <img src="https://picsum.photos/158/158" className="avatar"></img>
            <div className="rating">
              <div className="rating-score">4.0</div>
              <div className="rating-star">
                <StarRating className="Star" rate={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-follow">
        <div className="opacity50"></div>
        <div className="achivement-pf">
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
          <img
            src="https://picsum.photos/493/633"
            alt=""
            className="teacher-avatar"
          />
          <div className="lbl">
            <h3>THÔNG TIN GIẢNG VIÊN</h3>
          </div>
          <div className="details ml-20 mt-72">
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <UserOutlined
                    style={{ color: "#bb0409", fontSize: "4.6rem" }}
                  />
                </div>
                <div className="text text-3xl ml-4">
                  <strong>Họ và tên:</strong>
                  <div className="mt-2 small text-3xl">Nguyễn Văn A</div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <EnvironmentFilled
                    style={{ color: "#bb0409", fontSize: "4.6rem" }}
                  />
                </div>
                <div className="text text-3xl ml-4">
                  <strong>Nơi công tác: </strong>
                  <div className="mt-2 small text-3xl">MindX Hà Nội</div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <BookOutlined
                    style={{ color: "#bb0409", fontSize: "4.6rem" }}
                  />
                </div>
                <div className="text text-3xl ml-4">
                  <strong>Trình độ học vấn: </strong>
                  <div className="mt-2 small text-3xl">Thạc sĩ</div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <ReadFilled
                    style={{ color: "#bb0409", fontSize: "4.6rem" }}
                  />
                </div>
                <div className="text text-3xl ml-4">
                  <strong>Môn dạy: </strong>
                  <div className="mt-2 small text-3xl">
                    Lập trình Fullstack, Python, Java,...
                  </div>
                </div>
              </div>
            </div>
            <div className="row-a pb-6 mt-5">
              <div className="field ml-7">
                <div className="iconLeft">
                  <FacebookOutlined
                    style={{ color: "#bb0409", fontSize: "4.6rem" }}
                  />
                </div>
                <div className="text text-3xl ml-4">
                  <strong>Trang cá nhân: </strong>
                  <div className="mt-2 small text-3xl">
                    Lập trình Fullstack, Python, Java,...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-story mt-9">
        <div className="story-wrapper">
          <h1 className="story-title w-fit text-4xl m-auto font-bold">
            Đôi điều về giảng viên
          </h1>
          <div className="pic-frame">
            <img src="https://picsum.photos/407/487" alt="" className="teacher-img" width={407} height={487}/>
            <div className="frame-top">
              <div className="red-box-top"></div>
              <div className="blank-box-top"></div>
            </div>
            <div className="frame-bot">
              <div className="red-box-bot"></div>
              <div className="blank-box-bot"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-feedback"></div>
    </div>
  );
};

export default Lecturer;
