import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";

import styles from "./styles.module.scss";
import { useTransactions } from "@/hooks/useTransactions";

export const Header: React.FC = ({}) => {
  const { handleToggleNewTransactionModal } = useTransactions();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Image src={logo} alt="Ticto" />
        <button type="button" onClick={handleToggleNewTransactionModal}>
          NOVA TRANSAÇÃO
        </button>
      </div>
    </header>
  );
};
