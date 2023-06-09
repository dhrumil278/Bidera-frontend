import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
console.log("baseURL: ", baseURL);

export const authLogin = async (data) => {
  console.log("data: ", data);
  console.log("baseURL in api : ", baseURL);
  return await axios.post(`${baseURL}/login`, data);
};

export const authSignup = async (data) => {
  console.log("data: ", data);
  console.log("baseURL in api : ", baseURL);
  return await axios.post(`${baseURL}/registerUser`, data);
};

export const authForgotPass = async (data) => {
  console.log("data: ", data);
  console.log("baseURL in api : ", baseURL);
  return await axios.post(`${baseURL}/forgotPassword`, data);
};

export const authSetNewPass = async (data) => {
  console.log("data: ", data);
  console.log("baseURL in api : ", baseURL);
  return await axios.post(`${baseURL}/setNewPassword`, data);
};

export const authVerification = async (data) => {
  console.log("data: ", data);
  console.log("baseURL in api : ", baseURL);
  return await axios.post(`${baseURL}/emailConfirmation`, data);
};
