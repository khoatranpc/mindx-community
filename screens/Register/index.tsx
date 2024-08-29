"use client";
import { useEffect, useRef } from "react";
import { Button, Form, Input, Row, Col, message } from "antd";
import { useAuthRegister } from "@/utils/hooks";
import { useFormik } from "formik";
import { queryRegister } from "./query";
import { uuid } from "@/utils";
import { useRouter } from "next/navigation";

const Register = () => {
  const authRegister = useAuthRegister();
  const router = useRouter();
  const isSubmit = useRef(false);
  const componentId = useRef(uuid());
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit(values) {
      isSubmit.current = true;
      authRegister.post?.({
        graphQl: {
          query: queryRegister,
          variables: {
            createUserInput: {
              userName: values.userName,
              email: values.email,
              phoneNumber: values.phoneNumber,
              password: values.password,
              role: "STUDENT",
              active: false,
            },
          },
        },
        componentId: componentId.current,
      });
    },
  });

  useEffect(() => {
    if (authRegister.state.success) {
      message.success("Đăng ký thành công!");
      localStorage.setItem(
        "access_token",
        authRegister.state.data?.authenticated?.access_token
      );
      router.push("/auth/login");
    } else if (authRegister.state.error) {
      message.error(authRegister.state.message || "Đăng ký thất bại");
    }
  }, [authRegister.state, router]);

  return (
    <div className="register m-auto">
      <h3 className="text-[2.6rem] font-bold mb-[1.8rem]">Đăng ký</h3>
      <Form layout="vertical" className="p-1" onFinish={handleSubmit}>
        <Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Họ và tên"
                name="userName"
                rules={[{ required: true, message: "Bạn cần nhập họ và tên!" }]}
              >
                <Input
                  placeholder="Nhập họ và tên"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  style={{ height: "3.5rem" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Bạn cần nhập Email!", type: "email" },
                ]}
              >
                <Input
                  placeholder="Nhập email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
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
                  value={values.phoneNumber}
                  onChange={handleChange}
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
                  value={values.password}
                  onChange={handleChange}
                  style={{ height: "3.5rem" }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button
            className="w-full"
            htmlType="submit"
            loading={authRegister.state.isLoading}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
