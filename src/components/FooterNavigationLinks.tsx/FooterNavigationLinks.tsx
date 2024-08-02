import css from "./FooterNavogationLinks.module.scss";

interface footerLinkProps {
  linkName: string /* название ссылок футера */;
}

export const FooterNavigationLinks = ({ linkName }: footerLinkProps) => {
  return <li className={css.footer__link}>{linkName}</li>;
};
