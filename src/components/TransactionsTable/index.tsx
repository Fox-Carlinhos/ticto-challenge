import React from "react";
import Image from "next/image";

import { trash } from "@/assets";

import styles from "./styles.module.scss";
import { useTransactions } from "@/hooks/useTransactions";
import { currencyFormat } from "@/utils";

export const TransactionsTable: React.FC = () => {
  const { transactions, handleOpenDeleteTransactionModal } = useTransactions();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.heading}>
        <li>
          <strong>Registros</strong>
        </li>
        <li>{transactions.length > 1 ? `${transactions.length} itens` : `${transactions.length} item`}</li>
        <li>Descrição</li>
        <li>Valor</li>
        <li>Categoria</li>
        <li>Data</li>
      </ul>

      {transactions.map((transaction, index) => (
        <ul className={styles.body} key={index}>
          <li>{transaction.title}</li>
          <li className={styles[transaction.type]}>{currencyFormat(transaction.amount, "output")}</li>
          <li>{transaction.category}</li>
          <li>
            {new Intl.DateTimeFormat("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
              .format(new Date(transaction.createdAt))
              .replace(",", " às")
              .replace(":", "h")}
          </li>
          <li>
            <button type="button" onClick={() => handleOpenDeleteTransactionModal(transaction.id)}>
              <Image src={trash} alt="Lixeira" />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};
