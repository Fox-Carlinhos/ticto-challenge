import { ITransaction } from "@/interface";
import { api } from "../api";

export const getTransactions = async () => {
  try {
    const { data } = await api.get<{ transactions: ITransaction[] }>("/transactions");

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject(error);
  }
};
