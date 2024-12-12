import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/Input";
import { Controller } from "react-hook-form";
import { close, incomeCircle, outcomeCircle } from "@/assets";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useTransactions } from "@/hooks/useTransactions";
import { z } from "zod";
import { currencyFormat, personalDataSchema, type PersonalDataForm } from "@/utils";

export const NewTransactionModal: React.FC = ({}) => {
  const { isToggleNewTransactionModal, createTransaction, handleToggleNewTransactionModal } = useTransactions();

  const [type, setType] = useState<"withdraw" | "deposit">("deposit");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PersonalDataForm>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: {
      title: "",
      amount: 0,
      category: "",
    },
  });

  async function handleCreateNewTransaction(data: PersonalDataForm) {
    await createTransaction({
      ...data,
      type,
    });

    reset();
    setType("deposit");
    handleToggleNewTransactionModal();
  }

  return (
    <Modal isOpen={isToggleNewTransactionModal} onRequestClose={handleToggleNewTransactionModal} overlayClassName="react-modal-overlay" className="react-modal-content" ariaHideApp={false}>
      <button type="button" onClick={handleToggleNewTransactionModal} className="react-modal-close">
        <Image src={close} alt="Fechar modal" />
      </button>

      <form className={styles.form} onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <h2>Cadastrar transação</h2>

        <Controller name="title" control={control} render={({ field }) => <Input {...field} value={field.value || ""} type="text" placeholder="Nome" error={errors.title?.message} />} />

        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              inputMode="numeric"
              placeholder="Preço"
              value={field.value > 0 ? (currencyFormat(field.value, "output") as string) : ""}
              onChange={(event) => {
                const parsedValue = currencyFormat(event.target.value, "input") as number;
                field.onChange(parsedValue);
              }}
              error={errors.amount?.message}
            />
          )}
        />

        <div className={styles.transactionTypeWrapper}>
          <button
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            className={styles[type === "deposit" ? type : "radioBox"]}
          >
            <Image src={incomeCircle} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            className={styles[type === "withdraw" ? type : "radioBox"]}
          >
            <Image src={outcomeCircle} alt="Saída" />
            <span>Saída</span>
          </button>
        </div>

        <Controller name="category" control={control} render={({ field }) => <Input {...field} placeholder="Categoria" error={errors.category?.message} />} />
        <button type="submit">CADASTRAR</button>
      </form>
    </Modal>
  );
};
