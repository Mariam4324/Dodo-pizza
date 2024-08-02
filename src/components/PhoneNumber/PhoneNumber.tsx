import css from "./PhoneNumber.module.scss";

interface phoneNumberProps {
  numberColor: string /* white, black */;
}

export const PhoneNumber = ({ numberColor }: phoneNumberProps) => {
  return (
    <div className={css["phone"]}>
      <a className={css[`phone__number_${numberColor}`]} href="tel:88003020060">
        8 800 302-00-60
      </a>
      <a className={css["phone__subtitle"]} href="tel:88003020060">
        Звонок бесплатный
      </a>
    </div>
  );
};
