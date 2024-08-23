"use client";
import React from 'react';
import "./fstyle.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
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
          <div className="col-md-4">
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
          <div className="col-md-4">
            <h4>Mạng xã hội</h4>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Example. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;