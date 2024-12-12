"use client";

import { Header } from "@/components/Header";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { TransactionsProvider } from "@/hooks/useTransactions";

export default function Home() {
  return (
    <TransactionsProvider>
      <Header />
      <NewTransactionModal />
    </TransactionsProvider>
  );
}
