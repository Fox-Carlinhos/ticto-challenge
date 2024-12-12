import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";

import styles from "./styles.module.scss";

export const Header: React.FC = ({}) => {
  const handleOpenNewTransactionModal = () => {};

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Image src={logo} alt="Ticto" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          NOVA TRANSAÇÃO
        </button>
      </div>
    </header>
  );
};
