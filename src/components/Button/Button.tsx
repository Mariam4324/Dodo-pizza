import css from "./Button.module.scss";

/* с видами кнопок можно ознакомиться в макете проекта в разделе ui */
interface buttonProps {
  buttonText: string /* текст кнопки */;
  type: string /* primary, secondary */;
  size: string /* primary, secondary */;
}

export const Button = ({ buttonText, type, size }: buttonProps) => {
  return <button className={`${css[type]} ${css[size]}`}>{buttonText}</button>;
};
