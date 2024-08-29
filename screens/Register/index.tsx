"use client";
import { useState } from "react";
import { Button, Form, Input, Row, Col, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
const Register = () => {
  // Xử lý upload
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info: any) {
      const { status } = info.file;
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="register m-auto">
      <h3 className={`text-[2.6rem] font-bold mb-[1.8rem]`}>Đăng ký</h3>
      <Form layout="vertical" className="p-1">
        <Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Họ và tên"
                name="fullname"
                rules={[{ required: true, message: "Bạn cần nhập họ và tên!" }]}
              >
                <Input
                  placeholder="Nhập họ và tên"
                  name="fullname"
                  style={{ height: "3.5rem" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Bạn cần Email!", type: "email" },
                ]}
              >
                <Input
                  placeholder="Nhập email"
                  name="email"
                  style={{ height: "3.5rem" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Bạn cần nhập số điện thoại!" },
                ]}
              >
                <Input
                  placeholder="Nhập số điện thoại"
                  name="phoneNumber"
                  style={{ height: "3.5rem" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: "Bạn cần tạo mật khẩu!" }]}
              >
                <Input.Password
                  placeholder="Tạo mật khẩu mới"
                  name="password"
                  style={{ height: "3.5rem" }}
                />
              </Form.Item>
            </Col>
            {/* <Col span={24}>
              <Form.Item
                label="Địa chỉ"
                name="address"
                rules={[
                  { required: true, message: "Bạn cần nhập địa chỉ nhà!" },
                ]}
              >
                <Input
                  placeholder="Nhập địa chỉ"
                  name="address"
                  style={{ height: "3.5rem" }}
                />
              </Form.Item>
            </Col> */}
            {/* <Col span={24}>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Vui lòng tải 2 mặt căn cước công dân
                </p>
                <p className="ant-upload-hint">Kéo hình vào đây để tải lên</p>
              </Dragger>
            </Col> */}
          </Row>
        </Form.Item>
        <Form.Item>
          <Button className="w-full" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
