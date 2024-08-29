import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const RatingDroprown = () => {
  const items: MenuProps["items"] = [
    {
      label: <div>3 Star</div>,
      key: 0,
    },
    {
      label: <div>4 Star</div>,
      key: 0,
    },
    {
      label: <div>5 Star</div>,
      key: 0,
    },
  ];
  return (
    <>
      <div className="ratedDropdown inline-block text-2xl flex items-center justify-center">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a>
            <Space>
              Rating
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default RatingDroprown