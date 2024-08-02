import { Container } from "../../layout/Container/Container";
import { Logo } from "../Logo/Logo";
import css from "./Header.module.scss";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../Button/Button";
import { PhoneNumber } from "../PhoneNumber/PhoneNumber";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header__wrapper}>
          <Logo />

          <PhoneNumber />
        </div>

        <div className={css.header__nav}>
          <Navigation />
          <Button type={"primary"} size={"standart"} buttonText={"корзина"} />
        </div>
      </Container>
    </header>
  );
};
