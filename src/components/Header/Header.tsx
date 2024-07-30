import { Container } from "../../layout/Container/Container";
import { Logo } from "../Logo/Logo";
import css from "./Header.module.scss";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header__wrapper}>
          <Logo />

          <div className={css["header-phone"]}>
            <a className={css["header-phone__number"]} href="tel:88003020060">
              8 800 302-00-60
            </a>
            <a className={css["header-phone__subtitle"]} href="tel:88003020060">
              Звонок бесплатный
            </a>
          </div>
        </div>

        <div className={css.header__nav}>
          <Navigation />
          <Button classType={"primary-button"} buttonText={"корзина"} />
        </div>
      </Container>
    </header>
  );
};
