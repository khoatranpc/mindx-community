import React from "react";
import { Dropdown, Space } from "antd";
import type {MenuProps} from 'antd'
import { DownOutlined } from "@ant-design/icons";
import { Color } from "antd/es/color-picker";

const CourseDropdown = () => {
  const items: MenuProps['items'] = [
    {
      label: `Lập trình Scratch`,
      key: 0,
    },
    {
      type: "divider"
    },
    {
      label: `Lập trình Game`,
      key: 1,
    },
    {
      type: "divider"
    },
    {
      label: `App Mobiles`,
      key: 2,
    },
    {
      type: "divider"
    },
    {
      label: `Lập trình Website`,
      key: 3,
    },
    {
      type: "divider"
    },
    {
      label: `Computer Science`,
      key: 4,
    },
    {
      type: "divider"
    },
    {
      label: `Robotics`,
      key: 5,
    },
    {
      type: "divider"
    },
    {
      label: `Blockchain`,
      key: 6,
    }
  ];
  return (
    <div className="courseDropdown inline-block text-2xl flex items-center justify-center">
      <Dropdown menu={{ items }} trigger={['click'] }>
        <a >
          <Space>
            Môn học
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default CourseDropdown
