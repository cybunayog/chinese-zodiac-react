import axios from 'axios';

const authURL = 'http://localhost:8080/auth/';
const url = 'http://localhost:8080/api';

const formAPI = axios.create({ baseURL: url });
const authAPI = axios.create({ baseURL: authURL });

authAPI.interceptors.request.use(req => {
  if (localStorage.getItem('user')) req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;

  return req;
})

export const login = formData => authAPI.post('/login', formData);

export const register = formData => authAPI.post('/signup', formData);

export const fetchForms = () => formAPI.get('/form');

// change this
export const createForm = newForm => formAPI.post('/form/submitted', newForm);