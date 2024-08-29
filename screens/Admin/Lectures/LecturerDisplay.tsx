"use client";
import { useState } from "react";
import StarRating from "@/components/StarRating";
import { Button, Col, Row, Tag, Input, Select } from "antd";
import Lecturer from "./interface/Lecturer";

interface LecturerDisplayProps {
  viewingLecturer: Lecturer;
  onBack: () => void;
  onUpdate: (updatedLecturer: Lecturer) => void;
}

export const LecturerDisplay = ({
  viewingLecturer,
  onBack,
  onUpdate,
}: LecturerDisplayProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLecturer, setEditedLecturer] = useState(viewingLecturer);

  if (!viewingLecturer) {
    return null;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(editedLecturer);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedLecturer(viewingLecturer);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedLecturer({ ...editedLecturer, [field]: value });
  };

  return (
    <div>
      <Button onClick={onBack}>Quay lại</Button>
      <Row gutter={16} className="pt-[3rem]">
        <Col
          span={6}
          className="flex flex-col items-center gap-3 border-r-2 px-8"
        >
          <img
            src={editedLecturer.avatar || "/mindxavatar.webp"}
            alt="Avatar"
            className="rounded-full w-[180px]"
          />
          <p className="text-4xl font-bold">{editedLecturer.fullName}</p>
          <div className="flex gap-2 text-2xl text-gray-500">
            <StarRating rate={editedLecturer.rating} />
            <p>60 ratings</p>
          </div>
          <span className="flex gap-2 text-black font-bold">
            Trạng thái <Tag color="#87d068">{editedLecturer.status}</Tag>
          </span>
        </Col>

        <Col span={18} className="text-gray-500 font-medium">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h1 className="text-3xl font-bold text-black">Thông tin khác</h1>
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Họ và tên
              <Input
                value={editedLecturer.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                disabled={!isEditing}
                className="mb-4"
              />
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Số điện thoại
              <Input
                value={editedLecturer.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                disabled={!isEditing}
                className="mb-4"
              />
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Email
              <Input
                value={editedLecturer.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                disabled={!isEditing}
                className="mb-4"
              />
            </Col>
            <Col span={24} className="flex flex-col gap-2 text-2xl text-black">
              CV
              <Input
                value={editedLecturer.cv}
                onChange={(e) => handleInputChange("cv", e.target.value)}
                disabled={!isEditing}
                className="mb-4"
              />
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Chuyên môn:
              <Select
                value={editedLecturer.expertise}
                onChange={(value) => handleInputChange("expertise", value)}
                disabled={!isEditing}
                style={{ height: "3.5rem" }}
              >
                <Select.Option value="Intern">Intern</Select.Option>
                <Select.Option value="Fresher">Fresher</Select.Option>
                <Select.Option value="Junior">Junior</Select.Option>
                <Select.Option value="Senior">Senior</Select.Option>
              </Select>
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Vị trí
              <Select
                value={editedLecturer.position}
                onChange={(value) => handleInputChange("position", value)}
                disabled={!isEditing}
                style={{ height: "3.5rem" }}
              >
                <Select.Option value="Giảng viên">Giảng viên</Select.Option>
                <Select.Option value="Trợ giảng">Trợ giảng</Select.Option>
              </Select>
            </Col>
            <Col span={8} className="flex flex-col gap-2 text-2xl text-black">
              Môn đảm nhận
              <Select
                value={editedLecturer.subject}
                onChange={(value) => handleInputChange("subject", value)}
                disabled={!isEditing}
                style={{ height: "3.5rem" }}
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
          <Row className="mt-4">
            <Col span={24}>
              {!isEditing ? (
                <Button onClick={handleEdit}>Chỉnh sửa</Button>
              ) : (
                <>
                  <Button onClick={handleSave} type="primary" className="mr-2">
                    Lưu
                  </Button>
                  <Button onClick={handleCancel}>Hủy</Button>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
