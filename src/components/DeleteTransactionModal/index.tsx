import React from "react";
import Modal from "react-modal";

import { close, trash } from "@/assets";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useTransactions } from "@/hooks/useTransactions";

export const DeleteTransactionModal: React.FC = () => {
  const { id, trashTransaction, isToggleDeleteTransactionModal, handleCloseDeleteTransactionModal } = useTransactions();

  async function handleDeleteNewTransaction() {
    await trashTransaction(id as number);

    handleCloseDeleteTransactionModal();
  }

  return (
    <Modal isOpen={isToggleDeleteTransactionModal} onRequestClose={handleCloseDeleteTransactionModal} overlayClassName="react-modal-overlay" className="react-modal-content" ariaHideApp={false}>
      <button type="button" onClick={handleCloseDeleteTransactionModal} className="react-modal-close">
        <Image src={close} alt="botão X" />
      </button>

      <div className={styles.wrapper}>
        <h2>Você está excluindo este registro</h2>

        <figure>
          <Image src={trash} alt="Lixeira" />
        </figure>

        <p>Essa ação é permanente, deseja continuar?</p>

        <span>
          <button type="button" onClick={() => handleDeleteNewTransaction()}>
            DELETAR
          </button>
          <button type="button" onClick={() => handleCloseDeleteTransactionModal()}>
            CANCELAR
          </button>
        </span>
      </div>
    </Modal>
  );
};
