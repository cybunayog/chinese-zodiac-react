import { AUTH } from 'utils/constants/actionTypes';
import * as api from 'utils/api/index';

export const login = (email, password, router) => async dispatch => {
  try {
    const { data } = await api.login(email, password);

    dispatch({ type: AUTH, data });

    // route user to dashboard
    router.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const register = (email, password, router) => async dispatch => {
  try {
    const { data } = await api.register(email, password);

    dispatch({ type: AUTH, data });

    // route user to dashboard
    router.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};