import css from "./FooterNavogationLinks.module.scss";

interface footerNavProps {
  navName: string /* название подробки навигации футера */;
}

export const FooterNavigationLinks = ({ navName }: footerNavProps) => {
  /* создаю массивы с подборками link-ов */
  let aboutCollection: string[] = ["О нас", "Додо-книга", "Блог «Сила ума»", "Додо ИС"];
  let workCollection: string[] = ["В пиццерии", "В контакт- центре"];
  let partnersCollection: string[] = ["Франшиза", "Инвестиции", "Поставщикам", "Предложить помещение"];
  let interestingCollection: string[] = ["Экскурсии и мастер-классы", "Корпоративные заказы"];

  return (
    <nav className={css["footer-nav"]}>
      <h2 className={css["footer-nav__title"]}>{navName}</h2>

          <ul className={css["footer-list"]}>
              {aboutCollection.map((el) => )}
      </ul>
    </nav>
  );
};
