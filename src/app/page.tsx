"use client";

import { Dashboard } from "@/components/Dashboard";
import { DeleteTransactionModal } from "@/components/DeleteTransactionModal";
import { Header } from "@/components/Header";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { TransactionsProvider } from "@/hooks/useTransactions";

export default function Home() {
  return (
    <TransactionsProvider>
      <Header />
      <NewTransactionModal />
      <Dashboard />
      <DeleteTransactionModal />
    </TransactionsProvider>
  );
}
