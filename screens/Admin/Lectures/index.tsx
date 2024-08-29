"use client";
import { useState, useEffect } from "react";
import { ColumnsType } from "antd/es/table";
import { Button, Input, Tag, Form, Popconfirm } from "antd";
import { LecturerForm } from "./LecturerForm";
import Table from "@/components/Table";
import StarRating from "@/components/StarRating";
import "./styles.scss";
import { LecturerDisplay } from "./LecturerDisplay";

interface Lecturer {
  key: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  cv: string;
  status: string;
  position: string;
  subject: string;
  expertise: string;
  rating: number;
}

const AdminLectures = () => {
  const [lecturers, setLecturers] = useState<Lecturer[]>([]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editingLecturer, setEditingLecturer] = useState<Lecturer | null>(null);
  const [selectedLecturer, setSelectedLecturer] = useState<Lecturer | null>(
    null
  );
  const [form] = Form.useForm();

  const columns: ColumnsType<Lecturer> = [
    {
      key: "FullName",
      dataIndex: "fullName",
      title: "Thông tin giảng viên",
      render: (_, record) => (
        <div className="flex items-center gap-[1.2rem]">
          <div className="img w-[5rem]">
            <img
              src={record.avatar || "/mindxavatar.webp"}
              alt=""
              className="max-w-full rounded-full"
            />
          </div>
          <button
            className="flex flex-col"
            onClick={() => onShowDetail(record)}
          >
            <p className="font-bold">{record.fullName}</p>
            <p className="text-md">{record.email}</p>
          </button>
        </div>
      ),
    },
    {
      key: "PhoneNumber",
      dataIndex: "phoneNumber",
      title: "Số điện thoại",
    },
    {
      key: "CV",
      dataIndex: "cv",
      title: "CV",
      render: (cv) => <a href={cv}>Xem CV</a>,
    },
    {
      key: "Status",
      dataIndex: "status",
      title: "Trạng thái",
      render: (status) => <Tag color="#87d068">{status}</Tag>,
    },
    {
      key: "Position",
      title: "Vị trí",
      dataIndex: "position",
      render: (position, record) => (
        <div className="flex flex-col">
          <p>{position}</p>
          <p>{record.subject}</p>
        </div>
      ),
    },
    {
      key: "Expertise",
      dataIndex: "expertise",
      title: "Chuyên môn",
    },
    {
      key: "Rating",
      title: "Đánh giá",
      dataIndex: "rating",
      render: (rating) => (
        <div>
          <StarRating rate={rating} />
        </div>
      ),
    },
    {
      key: "Actions",
      title: "Hành động",
      render: (_, record) => (
        <div className="flex gap-[1.5rem]">
          <Button onClick={() => onEdit(record)}>Sửa</Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa không?"
            onConfirm={() => onDelete(record.key)}
            okText="Có"
            cancelText="Không"
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const showModal = () => {
    setEditingLecturer(null);
    setOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setConfirmLoading(true);
        const storedLecturers: Lecturer[] = JSON.parse(
          localStorage.getItem("lecturers") || "[]"
        );
        const avatar =
          values.avatar && values.avatar[0]
            ? values.avatar[0].thumbUrl
            : "/mindxavatar.webp";

        let updatedLecturers: Lecturer[];

        // Edit
        if (editingLecturer) {
          updatedLecturers = storedLecturers.map((lecturer) =>
            lecturer.key === editingLecturer.key
              ? { ...lecturer, ...values, avatar }
              : lecturer
          );
          setLecturers(updatedLecturers);
        } else {
          // Create new lecturer
          const newLecturer: Lecturer = {
            key: storedLecturers.length,
            ...values,
            status: "Hoạt động",
            rating: 5,
            avatar,
          };
          updatedLecturers = [...storedLecturers, newLecturer];
          setLecturers(updatedLecturers);
        }

        // Save to localStorage
        localStorage.setItem("lecturers", JSON.stringify(updatedLecturers));
        setConfirmLoading(false);
        setOpen(false);
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  const onDelete = (key: number) => {
    const updatedLecturers = lecturers.filter(
      (lecturer: Lecturer) => lecturer.key !== key
    );
    setLecturers(updatedLecturers);
    localStorage.setItem("lecturers", JSON.stringify(updatedLecturers));
  };

  const onEdit = (record: Lecturer) => {
    setEditingLecturer(record);
    form.setFieldsValue({
      ...record,
    });
    setOpen(true);
  };

  const onShowDetail = (record: Lecturer) => {
    setSelectedLecturer(record);
  };

  const onBack = () => {
    setSelectedLecturer(null);
  };

  const onUpdate = (updatedLecturer: Lecturer) => {
    const updatedLecturers = lecturers.map((lecturer) =>
      lecturer.key === updatedLecturer.key ? updatedLecturer : lecturer
    );
    setLecturers(updatedLecturers);
    setSelectedLecturer(updatedLecturer);
    localStorage.setItem("lecturers", JSON.stringify(updatedLecturers));
  };

  useEffect(() => {
    const storedLecturers: Lecturer[] = JSON.parse(
      localStorage.getItem("lecturers") || "[]"
    );
    setLecturers(storedLecturers);
  }, []);

  return (
    <div className="lectures flex gap-[1.2rem]">
      {!selectedLecturer ? (
        <>
          <div className="filter flex-[0.2] border-r-[0.4px] border-r-[black] border-solid">
            <p className="font-bold">Bộ lọc</p>
          </div>
          <div className="tableView flex-1">
            <div className="search flex justify-between mb-[1.2rem]">
              <Input
                className="max-w-[25rem]"
                size="small"
                placeholder="Search"
              />
              <Button size="small" onClick={showModal}>
                Tạo mới
              </Button>
            </div>
            <Table columns={columns} dataSource={lecturers} />
            <LecturerForm
              editingLecturer={editingLecturer}
              form={form}
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            />
          </div>
        </>
      ) : (
        <LecturerDisplay
          viewingLecturer={selectedLecturer}
          onBack={onBack}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default AdminLectures;
