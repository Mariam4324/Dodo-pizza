import css from './Button.module.scss';

export const Button = ({ buttonText, classType }) => {
  return <button className={css[classType]}>{buttonText}</button>;
};
