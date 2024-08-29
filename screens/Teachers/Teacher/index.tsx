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
import { UserContext } from "..";
import Typewriter from "typewriter-effect";
import "./style.scss";

export function CoLogo() {
  return (
    <Image src={"/logo.png"} className="CoLogo" alt="" width={56} height={55} />
  );
}

export const feedback = [
  {
    title: "Lời tri ân chân thành",
    name: "Lan",
    comment:
      "Em rất cảm ơn thầy cô đã luôn tận tình dạy dỗ chúng em. Những kiến thức và bài học thầy cô truyền đạt sẽ mãi là hành trang quý giá cho chúng em trên con đường tương lai.",
  },
  {
    title: "Sự biết ơn vô hạn",
    name: "Minh",
    comment:
      "Thầy cô đã không chỉ dạy em kiến thức mà còn dạy em cách sống và làm người. Em xin gửi lời cảm ơn sâu sắc đến thầy cô vì tất cả những gì thầy cô đã làm cho em.",
  },
  {
    title: "Cảm ơn vì tất cả",
    name: "Anh",
    comment:
      "Em biết rằng sự kiên nhẫn và nỗ lực của thầy cô dành cho chúng em không phải là điều dễ dàng. Em thật sự biết ơn vì thầy cô luôn ở bên, hướng dẫn và động viên chúng em vượt qua mọi khó khăn.",
  },
  {
    title: "Lời cảm ơn từ đáy lòng",
    name: "Hùng",
    comment:
      "Cảm ơn thầy cô đã luôn truyền cảm hứng cho chúng em, giúp chúng em yêu thích việc học và khám phá những điều mới mẻ. Thầy cô chính là người dẫn dắt để chúng em có được thành công ngày hôm nay.",
  },
  {
    title: "Biết ơn sự tận tụy",
    name: "Trang",
    comment:
      "Em muốn gửi lời cảm ơn đến thầy cô vì sự tận tụy và lòng yêu nghề. Những bài giảng của thầy cô không chỉ mang lại kiến thức mà còn truyền tải những giá trị nhân văn sâu sắc.",
  },
  {
    title: "Tri ân người dẫn đường",
    name: "Tùng",
    comment:
      "Những năm tháng dưới sự dạy dỗ của thầy cô là quãng thời gian đáng nhớ nhất của em. Em xin chân thành cảm ơn thầy cô đã luôn tin tưởng và giúp đỡ em trưởng thành.",
  },
  {
    title: "Sự biết ơn sâu sắc",
    name: "Quỳnh",
    comment:
      "Thầy cô đã giúp em nhận ra tiềm năng của mình và động viên em theo đuổi ước mơ. Em xin cảm ơn thầy cô vì những bài học quý báu và sự hướng dẫn tận tình trong suốt thời gian qua.",
  },
  {
    title: "Cảm ơn thầy cô kính yêu",
    name: "Phúc",
    comment:
      "Nhờ có thầy cô mà em đã trưởng thành hơn rất nhiều. Em biết ơn vì những kiến thức và kỹ năng mà thầy cô đã truyền đạt cho em, chúng sẽ mãi là hành trang quý báu trên con đường tương lai.",
  },
  {
    title: "Lòng biết ơn vô bờ",
    name: "Thảo",
    comment:
      "Em xin gửi lời cảm ơn chân thành đến thầy cô vì những nỗ lực không ngừng nghỉ để dạy dỗ chúng em. Những bài học từ thầy cô sẽ luôn là nguồn động lực để em phấn đấu mỗi ngày.",
  },
  {
    title: "Thầy cô là ngọn hải đăng",
    name: "Duy",
    comment:
      "Thầy cô là người đã thắp sáng con đường học tập của em, giúp em nhận ra giá trị của tri thức. Em thật sự biết ơn thầy cô vì tất cả những gì thầy cô đã làm cho em.",
  },
];

const LecturerDetails = () => {
  const feedback_view = feedback.splice(0, 3);
  console.log(feedback_view);

  const lecturers = useContext(UserContext);
  const crrUrl = window.location.href;
  const id = crrUrl.split("?")[1];
  const crrLecturer = lecturers.find((item) => String(item.id) === String(id));

  return (
    <div className="teacher-pf">
      <div className="pf-banner w-fit m-auto">
        <div className="left">
          <h1 className="pr-introduce text-6xl">
            Hi, tôi là <span className="redtext">{crrLecturer?.name}</span>
          </h1>
          <h1 className="pr-career text-4xl redtext">
            <Typewriter
              options={{
                strings: [
                  "Lập trình FullStack...",
                  "Game Developer...",
                  "Software Engineer...",
                  "Data analyst...",
                ],
                autoStart: true,
                delay: 0.1,
                loop: true,
                deleteSpeed: 0,
                wrapperClassName: "font-bold text-[var(--base)]",
              }}
            />
          </h1>
          <p className="pr-discription text-2xl redtext">
            {crrLecturer?.description}
          </p>
          <div className="quoteOfLife text-xl mb-3 py-3 px-3 mt-12">
            "{crrLecturer?.quoteOfLife}" <strong>- Quote Of Life</strong>
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
          ></div>
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
      <div className="pf-feedback mb-20 w-full mt-28">
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
            {feedback_view.map((e) => {
              return (
                <div className="body gap-4 flex flex-col items-center justify-center">
                  <div className="comment font-bold ">{e.title}</div>
                  <div className="content">
                    “{e.comment}”<strong> - {e.name}</strong>
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
              );
            })}
          </div>
          <div className="pf-projects mb-12 mt-24 w-full">
            <div className="wrapper mb-12 mt-12 mx-auto w-10/12">
              <div className="header text-4xl font-bold ml-5">
                Các dự án hoàn thành cùng với học viên
              </div>
              <div className="main w-full py-5 px-10">
                <div className="top flex justify-center items-center gap-5">
                  <div className="template">
                    <div
                      className="image w-full"
                      style={{
                        backgroundImage:
                          "url(https://cdn-hhomn.nitrocdn.com/owkBmdjkYWIKArhpTrYLoSVIZUZjkLka/assets/images/optimized/rev-20d16c7/hive.com/wp-content/uploads/2021/04/google-keeps-feature-image.png)",
                      }}
                    ></div>
                    <div className="content flex items-center justify-center flex-col">
                      <h1 className="text-5xl font-bold">To do List APP</h1>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                  <div className="template">
                    <div
                      className="image w-full"
                      style={{
                        backgroundImage:
                          "url(https://vuongthanh.vn/media/3swpq2a5/pha-mem-quan-ly-dat-lich-hen-online.jpg)",
                      }}
                    ></div>
                    <div className="content flex items-center justify-center flex-col">
                      <h1 className="text-4xl font-bold">
                        Hệ thống đặt lịch hẹn trực tuyến
                      </h1>
                      <p className="text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bottom flex justify-center items-center gap-5 mt-5">
                  <div className="template">
                    <div
                      className="image w-full"
                      style={{
                        backgroundImage:
                          "url(https://www.vocso.com/blog/wp-content/uploads/2022/02/WooCommerce-Sell-Online-With-The-eCommerce-Platform-for-WordPress.jpg)",
                      }}
                    ></div>
                    <div className="content flex items-center justify-center flex-col">
                      <h1 className="text-4xl font-bold">
                        Website đặt hàng trực tuyến
                      </h1>
                      <p className="text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                  <div className="template">
                    <div
                      className="image w-full"
                      style={{
                        backgroundImage:
                          "url(https://cdn.prod.website-files.com/65f4803d6dc2aecf0f7a1be2/660567d56c50ce3f2c79ade4_64119ac70cc227efca381cb8_graphics_Tekengebied-1-03-2000x1333.png)",
                      }}
                    ></div>
                    <div className="content flex items-center justify-center flex-col">
                      <h1 className="text-4xl font-bold">
                        Chatbot hỗ trợ khách hàng
                      </h1>
                      <p className="text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                  <div className="template">
                    <div
                      className="image w-full"
                      style={{
                        backgroundImage:
                          "url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/99903622/original/d7ee965d0ce010d9abd2e5128e3e9e30a2d57e25/provide-student-management-system-software.jpg)",
                      }}
                    ></div>
                    <div className="content flex items-center justify-center flex-col">
                      <h1 className="text-4xl font-bold">
                        Hệ thống quản lý sinh viên
                      </h1>
                      <p className="text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerDetails;
