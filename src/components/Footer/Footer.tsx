import { Container } from "../../layout/Container/Container";
import { FooterNavigation } from "../FooterNavigation/FooterNavigation";
import css from "./Footer.module.scss";
import { PhoneNumber } from "../PhoneNumber/PhoneNumber";
import { AppStores } from "../AppStores/AppStores";
import { FooterInfo } from "../FooterInfo/FooterInfo";
import { FooterBottom } from "../FooterBottom/FooterBottom";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footer__wrapper}>
          <FooterNavigation />

          <div className={css.footer__contacts}>
            <AppStores />

            <PhoneNumber numberColor={"white"} />

            <a className={css.footer__email} href="mailto:feedback@dodopizza.com">
              feedback@dodopizza.com
            </a>
          </div>
        </div>

        <div className={css["footer-info__wrapper"]}>
          <FooterInfo footerInfoValue={"1 396 362 874 ₽"} footerInfoSubtitle={"Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽"} />
          <FooterInfo footerInfoValue={"688 пиццерий"} footerInfoSubtitle={"в 14 странах, включая Китай, США и Великобританию"} />
        </div>

        <div className={css.footer__line}></div>

        <FooterBottom />
      </Container>
    </footer>
  );
};
