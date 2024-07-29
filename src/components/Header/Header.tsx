import { Container } from "../../layout/Container/Container";
import { Logo } from "../Logo/Logo";
import css from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Logo />
        
        <div className={css["header-phone"]}>
          <a className={css["header-phone__number"]} href="tel:88003020060">
            8 800 302-00-60
          </a>
          <a className={css["header-phone__subtitle"]} href="tel:88003020060">
            Звонок бесплатный
          </a>
        </div>
      </Container>
    </header>
  );
};
