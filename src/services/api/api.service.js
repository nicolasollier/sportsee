import { api } from "./config";

const id = process.env.NODE_ENV === "development" ? 12 : 18;

export const getUserDatas = async () => {
  try {
    const res = await api.get(`/user/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
