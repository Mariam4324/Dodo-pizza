import css from "./FooterBottom.module.scss";
import footerLogo from "../../assets/footer_logo.webp";
import fcIcon from "../../assets/footer_fc.png";
import instIcon from "../../assets/footer_inst.png";
import okIcon from "../../assets/footer_ok.png";
import vkIcon from "../../assets/footer_vk.png";
import youtubeIcon from "../../assets/footer_youtube.png";

export const FooterBottom = () => {
  return (
    <div className={css["footer-bottom"]}>
      <div className={css["footer-bottom__wrapper"]}>
        <div className={css["footer-bottom__logo_wrapper"]}>
          <img className={css["footer-bottom__logo"]} src={footerLogo} alt="logo" />
          <span className={css["footer-bottom__year"]}>© {new Date().getFullYear()}</span>
        </div>

        <nav className={css["footer-bottom__nav"]}>
          <ul className={css["footer-bottom__list"]}>
            <li>
              <a className={css["footer-bottom__item"]} href="#">
                Правовая информация
              </a>
            </li>
            <li>
              <a className={css["footer-bottom__item"]} href="#">
                Калорийность и состав
              </a>
            </li>
            <li>
              <a className={css["footer-bottom__item"]} href="#">
                Помощь
              </a>
            </li>
          </ul>
        </nav>

        <div className={css["footer-bottom__contacts"]}>
          <img className={css["footer-bottom__icon"]} src={fcIcon} alt="facebook link" />
          <img className={css["footer-bottom__icon"]} src={instIcon} alt="instagram link" />
          <img className={css["footer-bottom__icon"]} src={okIcon} alt="ok link" />
          <img className={css["footer-bottom__icon"]} src={vkIcon} alt="vk link" />
          <img className={css["footer-bottom__icon"]} src={youtubeIcon} alt="yuotube link" />
        </div>
      </div>
    </div>
  );
};
