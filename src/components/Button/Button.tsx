import { useState } from "react";
import css from "./Button.module.scss";
import { CounterBtn } from "../CounterBtn/CounterBtn";
// import { CounterBtn } from "../CounterBtn/CounterBtn";

/* с видами кнопок можно ознакомиться в макете проекта в разделе ui */
interface buttonProps {
  buttonText: string /* текст кнопки */;
  type: string /* primary, secondary */;
  size: string /* standart, big*/;
}

export const Button = ({ buttonText, type, size }: buttonProps) => {
  const [clickBtn, setClickBtn] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <>
      {!clickBtn || count <= 0 ? (
        <button
          onClick={() => {
            setClickBtn(true);
            setCount(1);
          }}
          className={`${css[type]} ${css[size]}`}
        >
          {buttonText}
        </button>
      ) : (
        <CounterBtn count={count} setCount={setCount} />
      )}
    </>
  );
};
