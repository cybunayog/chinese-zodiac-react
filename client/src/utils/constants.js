const apiUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_DEV : "/";

export {
  apiUrl
};