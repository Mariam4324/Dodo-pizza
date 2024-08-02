import css from "./CounterBtn.module.scss";
interface CounterProps {
  count: number;
  setCount: (count: number) => void;
}

export const CounterBtn = ({ count, setCount }: CounterProps) => {
  return (
    <button className={css.counter}>
      <button onClick={() => setCount(count - 1)} className={css.counter__sign}>
        -
      </button>
      <span className={css.counter__value}>{count}</span>
      <button onClick={() => setCount(count + 1)} className={css.counter__sign}>
        +
      </button>
    </button>
  );
};
