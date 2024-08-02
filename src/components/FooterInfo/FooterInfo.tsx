import css from "./FooterInfo.module.scss";
interface footerInfoProps {
  footerInfoTitle: string;
  footerInfoSubtitle: string;
}

export const FooterInfo = ({ footerInfoTitle, footerInfoSubtitle }) => {
  return (
    <div className={css["footer-info"]}>
      <p className={css["footer-info__title"]}>{footerInfoTitle}</p>
      <p className={css["footer-info__subtitle"]}>{footerInfoSubtitle}</p>
    </div>
  );
};
