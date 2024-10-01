"use client";
import React, { useState, useEffect } from "react";

interface Calculation {
  month: number;
  principal: number;
  monthlyInstallment: string;
  principalPayment: string;
  interestPayment: string;
  balance: string;
}

const VolumeInput: React.FC<{
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  unit: string;
}> = ({ value, onChange, min, max, step, label, unit }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 shadow-xl rounded-lg appearance-none cursor-pointer"
        />
        {/* <div
          className="absolute left-0 top-0 h-2 bg-[#FF9900] rounded-l-lg pointer-events-none"
          style={{ width: `${percentage}%` }}
        /> */}
        {/* <div
          className="absolute -top-1 w-4 h-4 bg-gray8500 rounded-full shadow"
          style={{ left: `calc(${percentage}% - 0.5rem)` }}
        /> */}
      </div>
      <div className="text-right mt-1 text-gray-800">
        {value.toLocaleString()} {unit}
      </div>
    </div>
  );
};

const LoanCalculator: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(3000000);
  const [repaymentPeriod, setRepaymentPeriod] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  useEffect(() => {
    calculateLoan();
  }, [totalAmount, repaymentPeriod, interestRate]);

  const calculateLoan = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyInstallment =
      (totalAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, repaymentPeriod)) /
      (Math.pow(1 + monthlyInterestRate, repaymentPeriod) - 1);

    let balance = totalAmount;
    const newCalculations: Calculation[] = [];

    for (let month = 1; month <= repaymentPeriod; month++) {
      const interestPayment = balance * monthlyInterestRate;
      const principalPayment = monthlyInstallment - interestPayment;
      balance -= principalPayment;

      newCalculations.push({
        month,
        principal: totalAmount,
        monthlyInstallment: monthlyInstallment.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0",
      });
    }

    setCalculations(newCalculations);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-100  text-gray-800 rounded-lg shadow-2xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">
        Loan Application Calculator
      </h1>
      <p className="mb-8 text-center text-gray-400">
        Easily calculate your monthly installments, principal payments, and
        interest breakdown based on loan amount, repayment period, and interest
        rate.
      </p>

      <div className="mb-8">
        <VolumeInput
          value={totalAmount}
          onChange={setTotalAmount}
          min={100000}
          max={10000000}
          step={100000}
          label="Total Amount"
          unit="Kes"
        />
        <VolumeInput
          value={repaymentPeriod}
          onChange={setRepaymentPeriod}
          min={1}
          max={360}
          step={1}
          label="Repayment Period"
          unit="months"
        />
        <VolumeInput
          value={interestRate}
          onChange={setInterestRate}
          min={0.1}
          max={30}
          step={0.1}
          label="Interest Rate"
          unit="%"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#FF9900] text-white">
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-left">Principal</th>
              <th className="p-3 text-left">Monthly Installments</th>
              <th className="p-3 text-left">Principal Payment</th>
              <th className="p-3 text-left">Interest Payment</th>
              <th className="p-3 text-left">Loan Balance</th>
            </tr>
          </thead>
          <tbody>
            {calculations.map((calc) => (
              <tr
                key={calc.month}
                className="border-b border-gray-700 hover:bg-gray-200"
              >
                <td className="p-3">{calc.month}</td>
                <td className="p-3">Ksh {calc.principal.toLocaleString()}</td>
                <td className="p-3">
                  Ksh {Number(calc.monthlyInstallment).toLocaleString()}
                </td>
                <td className="p-3">
                  Ksh {Number(calc.principalPayment).toLocaleString()}
                </td>
                <td className="p-3">
                  Ksh {Number(calc.interestPayment).toLocaleString()}
                </td>
                <td className="p-3">
                  Ksh {Number(calc.balance).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanCalculator;
