"use client";
import Image from "next/image";
import logo from "../public/logo.svg";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { useEffect, useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("");
  const [lastSpending, setLastSpending] = useState(228.03);
  const [days, setDays] = useState([
    { id: 0, title: "mon", spending: 17.5 },
    { id: 1, title: "tue", spending: 34.9 },
    { id: 2, title: "wed", spending: 52.36 },
    { id: 3, title: "thu", spending: 31.07 },
    { id: 4, title: "fri", spending: 23.4 },
    { id: 5, title: "sat", spending: 43.3 },
    { id: 6, title: "sun", spending: 25.5 },
  ]);
  const [biggestPrice, setBiggestPrice] = useState(52.36);

  useEffect(() => {
    const totalSpending = days.reduce((sum, day) => sum + day.spending, 0);
    setLastSpending(totalSpending);
    const maxSpendingDay = days.reduce((max, day) => {
      if (day.spending > max.spending) {
        return day;
      }
      return max;
    });

    setBiggestPrice(maxSpendingDay.spending);
  }, [days]);

  const handleDays = () => {
    const updatedDays = days.map((day) => {
      const randomNumber = Math.floor(Math.random() * 101);
      return { ...day, spending: randomNumber };
    });
    setDays(updatedDays);
  };

  return (
    <main className="grid place-content-center min-h-screen gap-4 px-4">
      <div className="w-full bg-red rounded-card flex items-center justify-between pl-5 pr-6 pt-5 pb-[1.375rem] lg:pl-8 lg:pt-[1.688rem] lg:pb-[1.563rem] lg:pr-[2.438rem]">
        <div className="flex flex-col gap-1">
          <h1 className="text-sm-caption lg:text-body text-white">My balance</h1>
          <span className="text-balance lg:text-lg-heading text-white">$921.48</span>
        </div>
        <Image src={logo} alt="logo" />
      </div>

      <div className="w-[21.438rem] lg:w-[33.75rem] min-h-[26.313rem] lg:min-h-[31.938rem] bg-card-white rounded-card px-5 py-6 lg:px-10 lg:pt-8 lg:pb-10 ">
        <h2 className="text-balance text-dark-brown lg:text-lg-heading mb-[3.25rem] lg:mb-[4.125rem]">Spending - Last 7 days</h2>
        <ul className="pb-6 lg:pb-8 border-b-2 rounded-xs border-cream-bg mb-6 lg:mb-8 flex gap-3 lg:gap-[1.119rem]  h-[12.688rem]">
          {days.map((item) => (
            <li key={item.id} onClick={() => setSelected(item.title)} className="flex flex-col items-center justify-end w-[2.063rem] lg:w-[3.148rem] cursor-pointer">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: (item.spending * 150) / biggestPrice }}
                transition={{ type: "spring", duration: 0.2, height: { duration: 0.6 }, bounce: 0.4 }}
                className={`relative w-[2.063rem] lg:w-[3.148rem] rounded-md transition-colors duration-300 ${
                  item.title === selected ? "bg-cyan hover:bg-blue" : "bg-red hover:bg-red-hover"
                } `}
                style={{ height: (item.spending * 150) / biggestPrice }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: item.title === selected ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute text-center lg:w-[4.688rem] p-1 w-[3.125rem] -top-[2.375rem] lg:-left-[0.77rem]  -left-[0.531rem]  bg-dark-brown rounded-md"
                  style={{ opacity: item.title === selected ? 1 : 0 }}
                >
                  <span className="text-[0.625rem] font-bold text-card-white">${item.spending}</span>
                </motion.div>
              </motion.div>
              <span className="text-sm-month text-medium-brown mt-[0.688rem] lg:mt-2">{item.title}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col">
          <h3 className="text-sm-caption lg:text-body text-medium-brown">Total this month</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-balance-month text-dark-brown lg:text-xl-heading ">
              $<Counter value={(250.3 + lastSpending).toFixed(0)} />
            </div>

            <div className="flex flex-col items-end">
              <span className="text-sm-caption-month lg:text-body-bold text-dark-brown">+2.4%</span>
              <span className="text-sm-caption lg:text-body  text-medium-brown">from last month</span>
            </div>
          </div>
        </div>
      </div>

      <button type="button" onClick={handleDays}>
        Click for random spending
      </button>
      <footer className="text-center">
        <p className="hidden lg:block text-sm sm:text-base whitespace-nowrap bg-white px-2 py-1 rounded-lg  font-semibold text-neutral-700">
          Challenge by&nbsp;
          <a className="text-blue-700 hover:text-blue-300 underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a className="text-blue-700 hover:text-blue-300 underline" href="https://www.frontendmentor.io/profile/ardaeker" target="_blank">
            Arda Eker
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
