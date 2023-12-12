import axios from "axios";

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/users/signup/", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to signup");
  }
  const data = res.data;
  return data;
};
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/users/login/", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/users/auth-status/");
  if (res.status !== 200) {
    throw new Error("Unable to verify token");
  }
  const data = await res.data;

  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chats/new/", { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  const res = await axios.get("/chats/all-chats/");
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};
export const deleteUserChats = async () => {
  const res = await axios.delete("/chats/delete-chats/");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/users/logout/");
  if (res.status !== 200) {
    throw new Error("Unable to logout");
  }
  const data = await res.data;
  return data;
};
