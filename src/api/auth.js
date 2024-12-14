import instance from ".";
import { storeToken } from "./storage";

// const signin = async (userInfo) => {
//   const { data } = await instance.post("/auth/signin", userInfo);
//   storeToken(data.token);
//   return data;
// };

const signin = async (formData) => {
  const data = await instance.post("/auth/signin", formData);
  localStorage.setItem("token", data.token);
  console.log("signin data", data)
  return data;
};


const signup = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post("/auth/signup", formData);
  storeToken(data.token);

  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllCreators = async () => {
  const { data } = await instance.get("/auth/creators");
  return data;
};

export { signin, signup, me, getAllCreators };
