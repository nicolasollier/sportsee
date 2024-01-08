import { api } from "./config";

export const getUserDatas = async (id) => {
  try {
    const res = await api.get(`/user/${id}`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
