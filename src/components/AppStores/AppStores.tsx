import css from "./AppStores.module.scss";
import googlePlayImg from "../../assets/footer_googlePlay.webp";
import appStoreImg from "../../assets/footer_appStore.webp";

export const AppStores = () => {
  return (
    <div className={css.stores}>
      <img className={css.stores__app} src={googlePlayImg} alt="Google Play" />
      <img className={css.stores__app} src={appStoreImg} alt="App Store" />
    </div>
  );
};
