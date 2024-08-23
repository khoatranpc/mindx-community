"use client";
import StarRating from "@/components/StarRating";
import { Col, Modal, Row, Tag } from "antd";

export const LectureDisplay = ({ viewingLecturer, open, close }: any) => {
  return (
    <div>
      {viewingLecturer && (
        <Modal
          title="Thông tin giảng viên"
          open={open}
          onCancel={close}
          footer={null}
          width={740}
        >
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
                  <h1 className="text-2xl font-bold">Thông tin khác</h1>
                </Col>
                <Col span={12}>
                  Số điện thoại:{" "}
                  <span className="text-black font-bold">
                    {viewingLecturer.phoneNumber}
                  </span>
                </Col>
                <Col span={12}>
                  Email:{" "}
                  <span className="text-black font-bold">
                    {viewingLecturer.email}
                  </span>
                </Col>
                <Col span={12}>
                  Chuyên môn:{" "}
                  <span className="text-black font-bold">
                    {viewingLecturer.expertise}
                  </span>
                </Col>
                <Col span={12}>
                  Vị trí:{" "}
                  <span className="text-black font-bold">
                    {viewingLecturer.position}
                  </span>
                </Col>
                <Col span={12}>
                  Môn đảm nhận:{" "}
                  <span className="text-black font-bold">
                    {viewingLecturer.subject}
                  </span>
                </Col>
                <Col span={12}>
                  CV:{" "}
                  <span className="text-black font-bold">
                    <a href={viewingLecturer.cv}>Link CV</a>
                  </span>
                </Col>
                <Col span={12}>
                  Trạng thái:{" "}
                  <span className="text-black font-bold">
                    <Tag color="#87d068">{viewingLecturer.status}</Tag>
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal>
      )}
    </div>
  );
};
