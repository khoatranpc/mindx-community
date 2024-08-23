import React, { useState } from "react";

const Lecturer = (props: any) => {
  // const [teacher, setTeacher] = useState([]);

  return (
    <div className="lecturer-item ">
      <img
        src="https://picsum.photos/236/315"
        alt=""
        className="LecturerAvatar"
        width={236}
        height={315}
      />
      <div className="LecturerInfo">
        <h1 className="LecturerName">Nguyễn Văn A</h1>
        <h1 className="LecturerCareer">Lập trình viên Web Fullstack</h1>
        <p className="LecturerDiscription">
          Có 10 năm kinh nghiệm trong ngành lập trình phần mềm, đã có chứng chỉ
          nghiệp vụ sư phạm đạt xuất sắc
        </p>
      </div>
        <button className="moreDetails ">Chi tiết</button>
    </div>
  );
};

export default Lecturer;
