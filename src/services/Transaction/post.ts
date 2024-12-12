import { api } from "../api";
import { ITransaction } from "@/interface";

export const postTransaction = async (values: Omit<ITransaction, "id" | "createdAt">): Promise<ITransaction> => {
  try {
    const { data } = await api.post<ITransaction>("/transactions", values);

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
