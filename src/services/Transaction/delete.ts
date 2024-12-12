import { api } from "../api";

export const deleteTransaction = async (id: number) => {
  try {
    await api.delete(`/transactions?id=${id}`);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
