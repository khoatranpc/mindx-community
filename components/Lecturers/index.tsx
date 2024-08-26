import Link from "next/link";
import React, { useState } from "react";

interface lecturer {
  name: String,
  course: String,
  description: String
}

const Lecturer = (props: any) => {
  // const [teacher, setTeacher] = useState([]);

  return (
    <div className="lecturer-item mx-auto mb- w-fit pb-2">
      <div
        className="LecturerAvatar"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg)",
        }}
      ></div>
      <div className="LecturerInfo font-bold">
        <h1 className="LecturerName text-2xl font-bold">{props.item.name}</h1>
        <h1 className="LecturerCareer text-base mt-3 mb-7 font-bold">
          {props.item.course}
        </h1>
        <p className="LecturerDiscription text-xl ">
          {props.item.description}
        </p>
      </div>
      <Link href={`lectures/lecturer?${props.item.index}`} className="moreDetails mt-14 text-sm flex items-center justify-center">Chi tiết</Link>
    </div>
  );
};

export default Lecturer;
