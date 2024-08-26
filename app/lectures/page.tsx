"use client";
import React from "react";
import { Inter } from "next/font/google";
import Lecturer from "@/components/Lecturers";
import CourseDropdown from "@/components/CourseDropdown";
import { Button, Input, Space } from "antd";
import type { GetProps } from "antd";
import { px } from "framer-motion";
import Link from "next/link";
import "./styles.scss";

type SearchProps = GetProps<typeof Input.Search>;

// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Lecturers = () => {
  const [lecturers, setLecturers] = ([
    {
      name: "Nguyễn Văn A",
      course: "Khoa học máy tính",
      description: "Chuyên dạy về thuật toán và cấu trúc dữ liệu."
    },
    {
      name: "Trần Thị B",
      course: "Mạng máy tính",
      description: "Giảng dạy về bảo mật mạng và các giao thức truyền thông."
    },
    {
      name: "Lê Văn C",
      course: "Hệ thống thông tin",
      description: "Tập trung vào quản lý dữ liệu và phát triển hệ thống thông tin."
    },
    {
      name: "Phạm Thị D",
      course: "Trí tuệ nhân tạo",
      description: "Dạy về các thuật toán học máy và xử lý ngôn ngữ tự nhiên."
    },
    {
      name: "Hoàng Văn E",
      course: "Phát triển phần mềm",
      description: "Chuyên về thiết kế và phát triển các ứng dụng phần mềm."
    },
    {
      name: "Nguyễn Thị F",
      course: "Khoa học dữ liệu",
      description: "Giảng dạy về phân tích dữ liệu lớn và học sâu."
    },
    {
      name: "Đỗ Văn G",
      course: "Công nghệ thông tin",
      description: "Dạy về các nguyên lý cơ bản của công nghệ thông tin và ứng dụng."
    },
    {
      name: "Vũ Thị H",
      course: "Kỹ thuật phần mềm",
      description: "Chuyên về quy trình phát triển và quản lý dự án phần mềm."
    },
    {
      name: "Phan Văn I",
      course: "An toàn thông tin",
      description: "Dạy về bảo mật hệ thống và các biện pháp phòng chống tấn công mạng."
    },
    {
      name: "Lý Thị J",
      course: "Thiết kế web",
      description: "Giảng dạy về lập trình web và phát triển giao diện người dùng."
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
            <button className="searchBtn ml-3 p-3 text-2xl">
              Tìm kiếm
            </button>
          </div>
          <CourseDropdown />
        </div>
        <div className="ListLecturers my-4 mx-auto flex gap-5 flex-wrap">
        </div>
      </div>
    </>
  );
};

export default Lecturers;
