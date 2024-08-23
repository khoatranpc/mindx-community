import React from "react";
import { Dropdown, Space } from "antd";
import type {MenuProps} from 'antd'
import { DownOutlined } from "@ant-design/icons";

const CourseDropdown = () => {
  const items: MenuProps['items'] = [
    {
      label: `1st menu`,
      key: 0,
    },
    {
      label: `2nd menu`,
      key: 1,
    },
    {
      label: `3rd menu`,
      key: 2,
    },
  ];
  return (
    <div className="courseDropdown inline-block">
      <Dropdown menu={{ items }} trigger={['click']}>
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
