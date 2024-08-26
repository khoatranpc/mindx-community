"use client";
import StarRating from "@/components/StarRating";
import { Button, Col, Row, Tag, Input, Select } from "antd";

export const LecturerDisplay = ({ viewingLecturer, onBack }: any) => {
  if (!viewingLecturer) {
    return null;
  }
  return (
    <div>
      <Button onClick={onBack}>Quay lại</Button>
      <Row gutter={16} className="pt-[3rem]">
        <Col
          span={6}
          className="flex flex-col items-center gap-3 border-r-2 px-8"
        >
          <img
            src={viewingLecturer.avatar || "/mindxavatar.webp"}
            alt="Avatar"
            className="rounded-full w-[180px]"
          />
          <p className="text-4xl font-bold">{viewingLecturer.fullName}</p>
          <div className="flex gap-2 text-2xl text-gray-500">
            <StarRating rate={viewingLecturer.rating} />
            <p>60 ratings</p>
          </div>
          <span className="flex gap-2 text-black font-bold">
            Trạng thái <Tag color="#87d068">{viewingLecturer.status}</Tag>
          </span>
        </Col>

        <Col span={18} className="text-gray-500 font-medium">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h1 className="text-3xl font-bold text-black">Thông tin khác</h1>
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Họ và tên
              {/* <span className="text-black font-bold">
                  {viewingLecturer.fullName}
                </span> */}
              <Input
                defaultValue={viewingLecturer.fullName}
                disabled
                className="mb-4"
              />
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Số điện thoại
              {/* <span className="text-black font-bold">
                  {viewingLecturer.phoneNumber}
                </span> */}
              <Input
                defaultValue={viewingLecturer.phoneNumber}
                disabled
                className="mb-4"
              />
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Email
              {/* <span className="text-black font-bold">
                  {viewingLecturer.email}
                </span> */}
              <Input
                defaultValue={viewingLecturer.email}
                disabled
                className="mb-4"
              />
            </Col>           
            <Col span={24} className="flex flex-col gap-2 text-2xl text-black">
              CV
              {/* <span className="text-black font-bold">
                  <a href={viewingLecturer.cv}>Link CV</a>
                </span> */}
              <Input
                defaultValue={viewingLecturer.cv}
                disabled
                className="mb-4"
              />
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Chuyên môn:
              {/* <span className="text-black font-bold">
                  {viewingLecturer.expertise}
                </span> */}
              <Select
                placeholder="Chọn chuyên môn"
                style={{ height: "3.5rem" }}
                defaultValue={viewingLecturer.expertise}
                disabled
              >
                <Select.Option value="Intern">Intern</Select.Option>
                <Select.Option value="Fresher">Fresher</Select.Option>
                <Select.Option value="Junior">Junior</Select.Option>
                <Select.Option value="Senior">Senior</Select.Option>
              </Select>
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Vị trí
              {/* <span className="text-black font-bold">
                  {viewingLecturer.position}
                </span> */}
              <Select
                placeholder="Chọn vị trí"
                style={{ height: "3.5rem" }}
                defaultValue={viewingLecturer.position}
                disabled
              >
                <Select.Option value="Giảng viên">Giảng viên</Select.Option>
                <Select.Option value="Trợ giảng">Trợ giảng</Select.Option>
              </Select>
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Môn đảm nhận
              {/* <span className="text-black font-bold">
                  {viewingLecturer.subject}
                </span> */}
              <Select
                placeholder="Chọn môn giảng dạy"
                style={{ height: "3.5rem" }}
                defaultValue={viewingLecturer.subject}
                disabled
              >
                <Select.Option value="Coding">Coding</Select.Option>
                <Select.Option value="Graphic Design">
                  Graphic Design
                </Select.Option>
                <Select.Option value="Business Analysis">
                  Business Analysis
                </Select.Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

// "use client";
// import StarRating from "@/components/StarRating";
// import { Button, Col, Row, Input, Tag, Upload } from "antd";

// export const LecturerDisplay = ({ viewingLecturer, onBack }: any) => {
//   if (!viewingLecturer) {
//     return null;
//   }
//   return (
//     <div className="p-6">
//       <Button onClick={onBack}>Quay lại</Button>
//       <Row gutter={16} className="mt-4">
//         <Col
//           span={8}
//           className="flex flex-col items-center gap-3 border-r-2 px-8"
//         >
//           <img
//             src={viewingLecturer.avatar || "/mindxavatar.webp"}
//             alt="Avatar"
//             className="rounded-full w-[180px]"
//           />
//           <p className="text-4xl font-bold">{viewingLecturer.fullName}</p>
//           <div className="flex gap-2 text-2xl text-gray-500">
//             <StarRating rate={viewingLecturer.rating} />
//             <p>60 ratings</p>
//           </div>
//         </Col>
//         <Col span={16}>
//           <Row gutter={[16, 16]}>
//             <Col span={24}>
//               <h1>Full name</h1>
//               <Input
//                 defaultValue={viewingLecturer.fullName}
//                 className="mb-4"
//               />
//             </Col>
//             <Col span={24}>
//               <h1>Full name</h1>
//               <Input
//                 defaultValue={viewingLecturer.fullName}
//                 className="mb-4"
//               />
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </div>
//   );
// };
