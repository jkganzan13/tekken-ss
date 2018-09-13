import { message as m, notification as n } from 'antd';

export const message = {
  error: msg => m.error(msg, 3),
};

export const notification = {
  warning: (title, description) =>
    n.warning({
      description,
      duration: 5,
      message: title,
      placement: 'topRight',
    }),
};
