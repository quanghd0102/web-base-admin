import { notification } from 'antd';

export const showErrorNoti = ({ title = 'Oops!', message = 'Something went wrong!' }) => {
  notification.error({
    message: title,
    description: message,
  });
};
