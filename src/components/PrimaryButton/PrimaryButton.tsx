import css from './PrimaryButton.module.scss';

export const PrimaryButton = ({ buttonText }) => {
  return <button className={css["primary-button"]}>{buttonText}</button>;
};
