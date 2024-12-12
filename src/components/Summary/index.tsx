import React from "react";
import Image from "next/image";

import { income, outcome } from "@/assets";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.module.scss";
import { useTransactions } from "@/hooks/useTransactions";
import { currencyFormat } from "@/utils";

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <div className={styles.wrapper}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <span>
              <p>Entradas</p>
              <Image src={income} alt="Entradas" />
            </span>
            <strong>{currencyFormat(summary.deposits, "output")}</strong>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.card}>
            <span>
              <p>Saídas</p>
              <Image src={outcome} alt="Saídas" />
            </span>
            <strong>{currencyFormat(summary.withdraw, "output")}</strong>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles[summary.total >= 0 ? "highlight" : "lowlight"]}>
            <span>
              <p>Total</p>
            </span>
            <strong>{currencyFormat(summary.total, "output")}</strong>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
