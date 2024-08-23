'use client'
import React from "react";
import { Inter } from "next/font/google";
import Lecturer from "@/components/Lecturers";
import CourseDropdown from "@/components/CourseDropdown";
import { Button, Input, Space } from 'antd';
import type { GetProps } from 'antd';
import { px } from "framer-motion";
import Link from "next/link";
import "./styles.scss";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const inter = Inter({ subsets: ["latin"] });

const Lecturers = () => {
  return (
    <>
      <div className={`${inter.className} Poster`}>
        <div className="poster-title">Giảng viên của MindX</div>
        <div className="poster-second-title">
          Đội ngũ giảng viên chuyên môn cao
        </div>
        <p className="poster-intro">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          incidunt nemo, tempore dicta vel harum quasi beatae nesciunt eveniet
          enim?
        </p>
      </div>
      <div className="box ml-auto mr-auto mt-20">
        <div className="box-navbar m-auto border">
          <div className="searchbar">
            <input type="text" placeholder="Tìm kiếm..." className="searchInput"/>
            <button  className="searchBtn">
              <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" width={18} height={18} alt="" className="searchIcon" />
            </button>
          </div>
          <CourseDropdown />
        </div>
        <div className="ListLecturers">
          <Lecturer />
          <Lecturer />
          <Lecturer />
          <Lecturer />
          <Lecturer />
          <Lecturer />
          <Lecturer />
          <Lecturer />
        </div>
      </div>
    </>
  );
};

export default Lecturers;
