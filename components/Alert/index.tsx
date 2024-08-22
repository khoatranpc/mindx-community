import React from 'react'
import { Alert } from 'antd'
const AlertComponent = () => {
  return (
      <div>
          <Alert
      message="Success Tips"
      description="Mã Otp đã được gửi đến email của bạn vui lòng reset lại mật khẩu"
      type="success"
        showIcon
    />
    </div>
  )
}

export default AlertComponent