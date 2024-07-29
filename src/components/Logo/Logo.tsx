import css from "./Logo.module.scss";
import logo from "../../assets/logo.svg";
import logoTitle from "../../assets/logo__title.svg";

export const Logo = () => {
  return (
    <div className={css.logo}>
      <img className={css.logo__icon} src={logo} alt="dodo pizza logo" />

      <div>
        {/* заголовки */}
        <img className={css.logo__title} src={logoTitle} alt="dodo pizza" />
        <p className={css.logo__subtitle}>Сеть пиццерий №1 в России</p>
      </div>
    </div>
  );
};
