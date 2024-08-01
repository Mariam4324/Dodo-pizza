import { ReactNode } from "react";
import s from "./Section.module.scss";
import { Container } from "../../layout/Container/Container";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.section__header}>{title}</h2>
        <div className={s.section__cards_wr}>{children}</div>
      </Container>
    </section>
  );
};

export default Section;
