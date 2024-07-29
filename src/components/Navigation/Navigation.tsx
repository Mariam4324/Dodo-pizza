import css from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <a className={css.navigation__link} href="#">
            Пицца
          </a>
        </li>
        <li>
          <a className={css.navigation__link} href="#">
            Комбо
          </a>
        </li>
        <li>
          <a className={css.navigation__link} href="#">
            Закуски
          </a>
        </li>
        <li>
          <a className={css.navigation__link} href="#">
            Десерты
          </a>
        </li>
        <li>
          <a className={css.navigation__link} href="#">
            Напитки
          </a>
        </li>
        <li>
          <a className={css.navigation__link} href="#">
            Другие товары
          </a>
        </li>
      </ul>
    </nav>
  );
};
