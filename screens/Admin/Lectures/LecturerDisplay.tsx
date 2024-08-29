  "use client";
  import StarRating from "@/components/StarRating";
  import { Button, Col, Row, Tag, Input } from "antd";

  export const LecturerDisplay = ({ viewingLecturer, onBack }: any) => {
    if (!viewingLecturer) {
      return null;
    }
    return (
      <div className="p-6">
        <Button onClick={onBack}>Quay lại</Button>
        <Row gutter={16}>
          <Col
            span={8}
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
          </Col>

          <Col span={16} className="text-gray-500 font-medium">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <h1 className="text-3xl font-bold text-black">Thông tin khác</h1>
              </Col>
              <Col span={12} className="flex flex-col gap-2 text-2xl text-black">
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
              <Col span={12} className="text-2xl">
                Số điện thoại:{" "}
                <span className="text-black font-bold">
                  {viewingLecturer.phoneNumber}
                </span>
              </Col>
              <Col span={12} className="text-2xl">
                Email:{" "}
                <span className="text-black font-bold">
                  {viewingLecturer.email}
                </span>
              </Col>
              <Col span={12} className="text-2xl">
                Chuyên môn:{" "}
                <span className="text-black font-bold">
                  {viewingLecturer.expertise}
                </span>
              </Col>
              <Col span={12} className="text-2xl">
                Vị trí:{" "}
                <span className="text-black font-bold">
                  {viewingLecturer.position}
                </span>
              </Col>
              <Col span={12} className="text-2xl">
                Môn đảm nhận:{" "}
                <span className="text-black font-bold">
                  {viewingLecturer.subject}
                </span>
              </Col>
              <Col span={12} className="text-2xl">
                CV:{" "}
                <span className="text-black font-bold">
                  <a href={viewingLecturer.cv}>Link CV</a>
                </span>
              </Col>
              <Col span={12} className="text-2xl">
                Trạng thái:{" "}
                <span className="text-black font-bold">
                  <Tag color="#87d068">{viewingLecturer.status}</Tag>
                </span>
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
