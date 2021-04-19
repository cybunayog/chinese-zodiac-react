const apiUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_DEV : process.env.REACT_APP_API_PROD;
const {REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_USER_ID } = process.env;

console.log(apiUrl);

export {
  apiUrl,
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_USER_ID
};