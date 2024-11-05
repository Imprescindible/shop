import dayjs from 'dayjs';

export const decodeJWT = (token) => {
  try {
    const parts = token.split('.');

    if (parts.length !== 3) {
      return false;
    }

    const payload = parts[1];

    const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decodedPayload);
  } catch {
    return false;
  }
};

export const isLogined = () => {
  const token = localStorage.getItem('token');
  const dekededToken = decodeJWT(token) || {};
  const decodeToken =
    token && dekededToken?.sub && dekededToken?.user && dekededToken?.iat;
  const isExpiredToken =
    dayjs(dekededToken?.iat * 1000)
      .add(3, 'hour')
      .unix() < dayjs().unix();
  return !!decodeToken && !isExpiredToken;
};
