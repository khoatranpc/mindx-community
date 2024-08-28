"use client";
import React from 'react';
import "./styles.scss";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="https://mindx.edu.vn/logo-200.png" className="icon-img" alt=""></img>
          </div>
          <div className="col-md-3">
            <h4>Liên hệ</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Địa chỉ: 123 ABC, XYZ
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> Điện thoại: 0999 999 999
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email: [info@example.com](mailto:info@example.com)
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Thông tin</h4>
            <ul>
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Dịch vụ</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Mạng xã hội</h4>
            <div className="social-icons">
                <a href="#" target="_blank">
                  <FacebookOutlined style={{ fontSize: 35 }} />
                </a>
                <a href="#" target="_blank">
                  <TwitterOutlined style={{ fontSize: 35 }} />
                </a>
                <a href="#" target="_blank">
                  <InstagramOutlined style={{ fontSize: 35  }} />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;