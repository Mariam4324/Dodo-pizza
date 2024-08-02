import css from "./FooterInfo.module.scss";
interface footerInfoProps {
  footerInfoValue: string /* значение выручки */;
  footerInfoSubtitle: string /* значение кол-ва пиццер */;
}

export const FooterInfo = ({ footerInfoValue, footerInfoSubtitle }) => {
  return (
    <div className={css["footer-info"]}>
      <p className={css["footer-info__title"]}>{footerInfoValue}</p>
      <p className={css["footer-info__subtitle"]}>{footerInfoSubtitle}</p>
    </div>
  );
};
