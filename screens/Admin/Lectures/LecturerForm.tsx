import { Form, Modal, Col, Row, Input, Select } from "antd";

export const LecturerForm = ({
  editingLecturer,
  form,
  open,
  onOk,
  confirmLoading,
  onCancel,
}: any) => {
  return (
    <Modal
      title={editingLecturer ? "Sửa giảng viên" : "Tạo giảng viên mới"}
      open={open}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      width={720}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          {/* <Col span={24}>
            <Form.Item label="Ảnh đại diện" name="avatar">
              <Input
                type="file"
                accept="image/*"
                placeholder="Chọn ảnh đại diện"
              />
            </Form.Item>
          </Col> */}
          <Col span={8}>
            <Form.Item
              label="Họ và tên"
              name="fullName"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
            >
              <Input
                placeholder="Nhập họ và tên"
                style={{ height: "3.5rem" }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Email!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Nhập email" style={{ height: "3.5rem" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
              ]}
            >
              <Input
                placeholder="Nhập số điện thoại"
                style={{ height: "3.5rem" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="CV"
              name="cv"
              rules={[{ required: true, message: "Điền URL của CV!" }]}
            >
              <Input placeholder="Nhập URL" style={{ height: "3.5rem" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Chuyên môn"
              name="expertise"
              rules={[{ required: true, message: "Vui lòng chọn chuyên môn!" }]}
            >
              <Select
                placeholder="Chọn chuyên môn"
                style={{ height: "3.5rem" }}
              >
                <Select.Option value="Intern">Intern</Select.Option>
                <Select.Option value="Fresher">Fresher</Select.Option>
                <Select.Option value="Junior">Junior</Select.Option>
                <Select.Option value="Senior">Senior</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Vị trí"
              name="position"
              rules={[{ required: true, message: "Vui lòng chọn vị trí!" }]}
            >
              <Select placeholder="Chọn vị trí" style={{ height: "3.5rem" }}>
                <Select.Option value="Giảng viên">Giảng viên</Select.Option>
                <Select.Option value="Trợ giảng">Trợ giảng</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Môn giảng dạy"
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn môn giảng dạy!",
                },
              ]}
            >
              <Select
                placeholder="Chọn môn giảng dạy"
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
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
