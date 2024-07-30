import css from "./Button.module.scss";
interface buttonProps {
  buttonText: string;
  type: string;
  size: string;
}

export const Button = ({ buttonText, type, size }: buttonProps) => {
  console.log(size);

  return <button className={`${css[type]} ${css[size]}`}>{buttonText}</button>;
};
