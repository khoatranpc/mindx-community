"use client";
import React, { useState, useContext,createContext } from "react";
import { Inter } from "next/font/google";
import Lecturer from "@/components/Lecturers";
import CourseDropdown from "@/components/CourseDropdown";
import { Button, Input, Space } from "antd";
import type { GetProps } from "antd";
import { px } from "framer-motion";
import Link from "next/link";
import "./styles.scss";
import LecturerDetails from "./lecturer/page";


type SearchProps = GetProps<typeof Input.Search>;

// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export const LectureList = [
  {
      id: 1,
      name: "Nguyễn Văn A",
      course: "Lập trình Python cơ bản",
      description: "Nguyễn Văn A có kinh nghiệm giảng dạy lập trình Python hơn 5 năm.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Cử nhân Công nghệ Thông tin",
      facebook: "https://facebook.com/nguyenvana",
      quoteOfLife: "Không ngừng học hỏi để phát triển."
  },
  {
      id: 2,
      name: "Trần Thị B",
      course: "Phát triển Web với ReactJS",
      description: "Trần Thị B là chuyên gia trong phát triển các ứng dụng web hiện đại.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Thạc sĩ Khoa học Máy tính",
      facebook: "https://facebook.com/tranthib",
      quoteOfLife: "Thành công là một hành trình, không phải là đích đến."
  },
  {
      id: 3,
      name: "Phạm Văn C",
      course: "Khoa học Dữ liệu với Python",
      description: "Phạm Văn C chuyên sâu trong lĩnh vực khoa học dữ liệu và trí tuệ nhân tạo.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Tiến sĩ Khoa học Máy tính",
      facebook: "https://facebook.com/phamvanc",
      quoteOfLife: "Dữ liệu là sức mạnh trong thời đại công nghệ."
  },
  {
      id: 4,
      name: "Lê Thị D",
      course: "An ninh mạng và bảo mật thông tin",
      description: "Lê Thị D có nhiều năm kinh nghiệm trong lĩnh vực an ninh mạng.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Thạc sĩ An toàn Thông tin",
      facebook: "https://facebook.com/lethid",
      quoteOfLife: "Bảo mật không phải là lựa chọn, mà là bắt buộc."
  },
  {
      id: 5,
      name: "Vũ Văn E",
      course: "Lập trình Java nâng cao",
      description: "Vũ Văn E là chuyên gia với hơn 10 năm kinh nghiệm lập trình Java.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Cử nhân Kỹ thuật Phần mềm",
      facebook: "https://facebook.com/vuvane",
      quoteOfLife: "Mọi vấn đề đều có giải pháp, hãy bắt đầu từ việc đơn giản nhất."
  },
  {
      id: 6,
      name: "Ngô Thị F",
      course: "Lập trình Android với Kotlin",
      description: "Ngô Thị F là chuyên gia về phát triển ứng dụng di động Android.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Thạc sĩ Công nghệ Phần mềm",
      facebook: "https://facebook.com/ngothif",
      quoteOfLife: "Tạo ra giá trị thực tế qua từng dòng code."
  },
  {
      id: 7,
      name: "Đặng Văn G",
      course: "Kỹ thuật Máy tính và Hệ thống Nhúng",
      description: "Đặng Văn G có kinh nghiệm trong thiết kế hệ thống nhúng và kỹ thuật máy tính.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Cử nhân Kỹ thuật Máy tính",
      facebook: "https://facebook.com/dangvang",
      quoteOfLife: "Khám phá và sáng tạo không ngừng nghỉ."
  },
  {
      id: 8,
      name: "Hoàng Thị H",
      course: "Phân tích và Thiết kế Hệ thống Thông tin",
      description: "Hoàng Thị H chuyên gia trong phân tích và thiết kế các hệ thống thông tin doanh nghiệp.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Thạc sĩ Hệ thống Thông tin",
      facebook: "https://facebook.com/hoangthih",
      quoteOfLife: "Công nghệ là công cụ, sự sáng tạo là chìa khóa."
  },
  {
      id: 9,
      name: "Bùi Văn I",
      course: "Phát triển ứng dụng với Node.js",
      description: "Bùi Văn I là chuyên gia về phát triển backend với Node.js.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Cử nhân Công nghệ Thông tin",
      facebook: "https://facebook.com/buivani",
      quoteOfLife: "Sự bền bỉ và kiên trì dẫn đến thành công."
  },
  {
      id: 10,
      name: "Đỗ Thị K",
      course: "Trí tuệ Nhân tạo và Máy học",
      description: "Đỗ Thị K có nhiều năm kinh nghiệm nghiên cứu và giảng dạy về trí tuệ nhân tạo và máy học.",
      workAt: "MindX Hà Nội",
      levelOfEducation: "Tiến sĩ Trí tuệ Nhân tạo",
      facebook: "https://facebook.com/dothik",
      quoteOfLife: "Máy móc có thể học, nhưng con người mới là người sáng tạo."
  }
];

export const UserContext = createContext(LectureList);

const Lecturers = () => {
  const [lecturers, setLecturers] = useState([
    {
        id: 1,
        name: "Nguyễn Văn A",
        course: "Lập trình Python cơ bản",
        description: "Nguyễn Văn A có kinh nghiệm giảng dạy lập trình Python hơn 5 năm.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Cử nhân Công nghệ Thông tin",
        facebook: "https://facebook.com/nguyenvana",
        quoteOfLife: "Không ngừng học hỏi để phát triển."
    },
    {
        id: 2,
        name: "Trần Thị B",
        course: "Phát triển Web với ReactJS",
        description: "Trần Thị B là chuyên gia trong phát triển các ứng dụng web hiện đại.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Thạc sĩ Khoa học Máy tính",
        facebook: "https://facebook.com/tranthib",
        quoteOfLife: "Thành công là một hành trình, không phải là đích đến."
    },
    {
        id: 3,
        name: "Phạm Văn C",
        course: "Khoa học Dữ liệu với Python",
        description: "Phạm Văn C chuyên sâu trong lĩnh vực khoa học dữ liệu và trí tuệ nhân tạo.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Tiến sĩ Khoa học Máy tính",
        facebook: "https://facebook.com/phamvanc",
        quoteOfLife: "Dữ liệu là sức mạnh trong thời đại công nghệ."
    },
    {
        id: 4,
        name: "Lê Thị D",
        course: "An ninh mạng và bảo mật thông tin",
        description: "Lê Thị D có nhiều năm kinh nghiệm trong lĩnh vực an ninh mạng.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Thạc sĩ An toàn Thông tin",
        facebook: "https://facebook.com/lethid",
        quoteOfLife: "Bảo mật không phải là lựa chọn, mà là bắt buộc."
    },
    {
        id: 5,
        name: "Vũ Văn E",
        course: "Lập trình Java nâng cao",
        description: "Vũ Văn E là chuyên gia với hơn 10 năm kinh nghiệm lập trình Java.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Cử nhân Kỹ thuật Phần mềm",
        facebook: "https://facebook.com/vuvane",
        quoteOfLife: "Mọi vấn đề đều có giải pháp, hãy bắt đầu từ việc đơn giản nhất."
    },
    {
        id: 6,
        name: "Ngô Thị F",
        course: "Lập trình Android với Kotlin",
        description: "Ngô Thị F là chuyên gia về phát triển ứng dụng di động Android.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Thạc sĩ Công nghệ Phần mềm",
        facebook: "https://facebook.com/ngothif",
        quoteOfLife: "Tạo ra giá trị thực tế qua từng dòng code."
    },
    {
        id: 7,
        name: "Đặng Văn G",
        course: "Kỹ thuật Máy tính và Hệ thống Nhúng",
        description: "Đặng Văn G có kinh nghiệm trong thiết kế hệ thống nhúng và kỹ thuật máy tính.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Cử nhân Kỹ thuật Máy tính",
        facebook: "https://facebook.com/dangvang",
        quoteOfLife: "Khám phá và sáng tạo không ngừng nghỉ."
    },
    {
        id: 8,
        name: "Hoàng Thị H",
        course: "Phân tích và Thiết kế Hệ thống Thông tin",
        description: "Hoàng Thị H chuyên gia trong phân tích và thiết kế các hệ thống thông tin doanh nghiệp.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Thạc sĩ Hệ thống Thông tin",
        facebook: "https://facebook.com/hoangthih",
        quoteOfLife: "Công nghệ là công cụ, sự sáng tạo là chìa khóa."
    },
    {
        id: 9,
        name: "Bùi Văn I",
        course: "Phát triển ứng dụng với Node.js",
        description: "Bùi Văn I là chuyên gia về phát triển backend với Node.js.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Cử nhân Công nghệ Thông tin",
        facebook: "https://facebook.com/buivani",
        quoteOfLife: "Sự bền bỉ và kiên trì dẫn đến thành công."
    },
    {
        id: 10,
        name: "Đỗ Thị K",
        course: "Trí tuệ Nhân tạo và Máy học",
        description: "Đỗ Thị K có nhiều năm kinh nghiệm nghiên cứu và giảng dạy về trí tuệ nhân tạo và máy học.",
        workAt: "MindX Hà Nội",
        levelOfEducation: "Tiến sĩ Trí tuệ Nhân tạo",
        facebook: "https://facebook.com/dothik",
        quoteOfLife: "Máy móc có thể học, nhưng con người mới là người sáng tạo."
    }
])

  return (
    <>
      <div className={`Poster font-bold m-auto w-full`}>
        <div className="poster-title text-4xl mt-10 w-fit my-0 mx-auto">
          Giảng viên của MindX
        </div>
        <div className="poster-second-title mt-5 mx-auto text-5xl w-fit h-fit">
          Đội ngũ giảng viên chuyên môn cao
        </div>
        <p className="poster-intro text-3xl mt-7 w-3/5 h-fit mx-auto text-center">
          "Dấn thân vào sự nghiệp công nghệ thông tin là chấp nhận bước vào một
          hành trình không ngừng học hỏi, vì tri thức hôm nay có thể đã lạc hậu
          vào ngày mai."
        </p>
      </div>
      <div className="box ml-auto mr-auto mt-20 w-11/12">
        <div className="box-navbar m-auto flex justify-between">
          <div className="searchbar flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="searchInput text-lg pl-5"
            />
            <button className="searchBtn ml-3 p-3 text-2xl ">
              Tìm kiếm
            </button>
          </div>
          <CourseDropdown />
        </div>
        <div className="ListLecturers my-4 mx-auto flex gap-5 flex-wrap">
          {lecturers.map((e) => {
            return <Lecturer item={e} key={e.id} />
          })}
        </div>
      </div>
      <UserContext.Provider value={lecturers}>
      </UserContext.Provider>
    </>
  );
};

export default Lecturers;