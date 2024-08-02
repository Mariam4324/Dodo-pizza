import { FooterNavigationLinks } from "../FooterNavigationLinks.tsx/FooterNavigationLinks";
import css from "./FooterNavigation.module.scss";

export const FooterNavigation = () => {
  /* создаю массивы с подборками link-ов */
  let aboutCollection: string[] = ["О нас", "Додо-книга", "Блог «Сила ума»", "Додо ИС"];
  let workCollection: string[] = ["В пиццерии", "В контакт- центре"];
  let partnersCollection: string[] = ["Франшиза", "Инвестиции", "Поставщикам", "Предложить помещение"];
  let interestingCollection: string[] = ["Экскурсии и мастер-классы", "Корпоративные заказы"];

  return (
    <div className={css.footer__wrapper}>
      <nav className={css["footer-nav"]}>
        <h2 className={css["footer-nav__title"]}>Додо Пицца</h2>

        <ul className={css["footer-list"]}>
          {aboutCollection.map((el) => (
            <FooterNavigationLinks linkName={el} />
          ))}
        </ul>
      </nav>

      <nav className={css["footer-nav"]}>
        <h2 className={css["footer-nav__title"]}>Работа</h2>

        <ul className={css["footer-list"]}>
          {workCollection.map((el) => (
            <FooterNavigationLinks linkName={el} />
          ))}
        </ul>
      </nav>

      <nav className={css["footer-nav"]}>
        <h2 className={css["footer-nav__title"]}>Партнерам</h2>

        <ul className={css["footer-list"]}>
          {partnersCollection.map((el) => (
            <FooterNavigationLinks linkName={el} />
          ))}
        </ul>
      </nav>

      <nav className={css["footer-nav"]}>
        <h2 className={css["footer-nav__title"]}>Это интересно</h2>

        <ul className={css["footer-list"]}>
          {interestingCollection.map((el) => (
            <FooterNavigationLinks linkName={el} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
