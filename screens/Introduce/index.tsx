"use client";
import { motion, useScroll } from "framer-motion";
import Typewriter from "typewriter-effect";
import React from "react";
import { Avatar } from "antd";
import Header, { AnchorHref, AnchorIntroducePageTitle } from "./Header";
import ListLect from "./ListLect";
import CallCenter from "@/icons/CallCenter";
import Business from "@/icons/Business";
import Programmer from "@/icons/Programmer";
import Student from "@/icons/Student";
import Infinity from "@/icons/Infinity";
import "./styles.scss";

const itemsUser = [
  [
    {
      icon: CallCenter,
      title: "MindX Customer",
      description:
        "Chịu trách nhiệm kết nối, hỗ trợ học viên với doanh nghiệp, giảng viên",
    },
    {
      icon: Business,
      title: "Doanh nghiệp",
      description: "Doanh nghiệp đối tác, nhà tuyển dụng",
    },
  ],
  [
    {
      icon: Programmer,
      title: "Giảng viên",
      description:
        "Giảng viên là những người có kinh nghiệm lâu năm trong ngành, sở hữu nghiệp vụ giáo dục",
    },
    {
      icon: Student,
      title: "Học viên",
      description: "Là những học viên, cựu học viên tại MindX",
    },
  ],
];

const Introduce = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="introducePage max-w-screen-2xl m-auto">
      <motion.div
        className="progress-bar bg-[var(--base)] max-w-screen-2xl m-auto z-50 left-[unset!important]"
        style={{ scaleX: scrollYProgress }}
      >
        {" "}
      </motion.div>
      <Header />
      <div className="banner p-[5.6rem]">
        <div className="row flex items-center gap-[2.4rem]">
          <div className="des w-[60%]">
            <h1 className="text-[3.2rem] font-medium mb-[2.4rem]">
              <span className="text-[var(--base)] font-bold">
                MindX Community
              </span>{" "}
              - Cộng đồng MindX
            </h1>
            <p className="text-[2.8rem]  mb-[1.2rem]">
              Nền tảng dành cho học viên của MindX
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Giao lưu",
                      "Hướng Nghiệp",
                      "Chia sẻ kinh nghiệm",
                      "Kết nối Giảng viên, Doanh nghiệp",
                    ],
                    autoStart: true,
                    delay: 0.1,
                    loop: true,
                    deleteSpeed: 0,
                    wrapperClassName: "font-bold text-[var(--base)]",
                  }}
                />
              </span>
            </p>
            <p className="text-[var(--bs-color)] text-[1.8rem] mb-[2.4rem]">
              Xuất phát từ nhu cầu kết nối, học hỏi từ học viên của MindX, nền
              tảng được xây dựng với mục tiêu là cánh cổng giúp học viên, doanh
              nghiệp, giảng viên có thể kết nối, chia sẻ với nhau
            </p>
            <h2 className="text-[2.8rem] font-bold mb-[2.4rem] text-[var(--base)]">
              Người dùng
            </h2>
            <div className="coms flex gap-[2.4rem]">
              <div className="flex gap-[2rem]">
                {itemsUser.map((colItems, colIndex) => (
                  <div key={colIndex} className="col flex flex-col gap-[2rem]">
                    {colItems.map((item, index) => (
                      <div key={index} className="item flex gap-[2rem]">
                        <span className="w-[5rem] h-[5rem]">
                          <item.icon className="w-[5rem] h-[5rem] fill-[var(--base)]" />
                        </span>
                        <div className="des">
                          <span className="text-[1.4rem] font-medium">
                            {item.title}
                          </span>
                          <p className="content text-[1.2rem] max-w-[80%]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="img w-[40%] relative">
            <img
              className="max-w-full rounded-[10px]"
              src="/cutBanner.png"
              alt=""
            />
            <div className="absolute bottom-[4.2rem] left-0 translate-x-[-50%] rounded-[12px] groupUser py-[1.2rem] px-[2.4rem]">
              <Avatar.Group>
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Avatar style={{ backgroundColor: "#7265e6" }}>B</Avatar>
                <Avatar style={{ backgroundColor: "#00a2ae" }}>L</Avatar>
                <Avatar style={{ backgroundColor: "#ffbf00" }}>
                  <span className="text-[1.4rem] font-bold">+400</span>
                </Avatar>
              </Avatar.Group>
              <p className="text-[1.6rem] font-medium mt-[1.2rem]">
                400+ Người dùng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="targets px-[5.6rem] mb-[5.6rem]"
        id={AnchorHref["targets"]}
      >
        <h2 className="text-[2.8rem] font-bold text-[var(--base)] mb-[2.4rem]">
          {AnchorIntroducePageTitle.targets}
        </h2>
        <div className="flex justify-between">
          <div className="flex">
            <div className="businesses">
              <p className="flex items-end gap-[1.2rem] mb-[1.2rem]">
                <span className="w-[3rem] h-[3rem] block">
                  <Business className="w-[3rem] h-[3rem] fill-[var(--base)]" />
                </span>
                <span className="text-[1.6rem] font-bold">Doanh nghiệp</span>
              </p>
              <ul className="list-disc pl-[4.2rem]">
                <li className="text-[1.6rem]">
                  Truyền thông hình ảnh đối tác, xây dựng thương hiệu và gia
                  tăng uy tín cá nhân
                </li>
                <li className="text-[1.6rem]">
                  Kết nối ứng viên tiềm năng tới doanh nghiệp, mở rộng vốn tuyển
                  dụng
                </li>
                <li className="text-[1.6rem]">
                  Mở rộng network, kết nối cùng HR/ chuyên gia/ C-level trong
                  lĩnh vực CNTT
                </li>
              </ul>
            </div>
            <div className="students"></div>
          </div>
          <Infinity className="w-[12rem] h-[12rem] self-center fill-[var(--base)]" />
          <div className="flex">
            <div className="businesses">
              <p className="flex items-end gap-[1.2rem] mb-[1.2rem]">
                <span className="w-[3rem] h-[3rem] block">
                  <Student className="w-[3rem] h-[3rem] fill-[var(--base)]" />
                </span>
                <span className="text-[1.6rem] font-bold">Học viên</span>
              </p>
              <ul className="list-disc pl-[4.2rem]">
                <li className="text-[1.6rem]">
                  Nâng cao chất lượng nguồn nhân lực trẻ ngành IT nhằm đáp ứng
                  tiêu chí tuyển dụng của thị trường
                </li>
                <li className="text-[1.6rem]">
                  Có môi trường nâng cao năng lực ứng tuyển, tư vấn viết CV,
                  phỏng vấn, ...
                </li>
                <li className="text-[1.6rem]">
                  Kết nối ứng viên tiềm năng với các doanh nghiệp có nhu cầu
                  tuyển dụng
                </li>
              </ul>
            </div>
            <div className="students"></div>
          </div>
        </div>
      </div>
      <div className="lectures px-[5.6rem]" id={AnchorHref["lects"]}>
        <h2 className="text-[2.8rem] font-bold text-[var(--base)] mb-[2.4rem]">
          {AnchorIntroducePageTitle.lects}
        </h2>
        <ListLect />
      </div>
    </div>
  );
};

export default Introduce;
