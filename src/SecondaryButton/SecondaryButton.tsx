import css from "./SecondaryButton.module.scss";

export const SecondaryButton = ({ buttonText }) => {
  return <button className={css["secondary-button"]}>{buttonText}</button>;
};
