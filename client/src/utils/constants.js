const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_PROD : process.env.REACT_APP_API_DEV;

export {
  apiUrl
};