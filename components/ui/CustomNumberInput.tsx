"use client";

import { Dispatch, SetStateAction } from "react";

type CustomNumberInputProps = {
  value: number;
  stepDefinition: number;
  changeFunction: Dispatch<SetStateAction<number>>;
};

export default function CustomNumberInput({
  changeFunction,
  stepDefinition,
  value,
}: CustomNumberInputProps) {
  const onAdd = () => {
    changeFunction((currentVal) => currentVal + stepDefinition);
  };

  const onMinus = () => {
    changeFunction((currentVal) => currentVal + stepDefinition);
  };

  return (
    <div>
      <input type="number" value={value} />
      <button onClick={onAdd}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
}
