import { Container } from "../../layout/Container/Container";
import { FooterNavigation } from "../FooterNavigation/FooterNavigation";
import css from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <FooterNavigation navName="Додо Пицца" />
      </Container>
    </footer>
  );
};
