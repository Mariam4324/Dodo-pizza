import { Button } from "../Button/Button";
import s from "./ProductCard.module.scss";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  buttonText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  buttonText,
}) => {
  return (
    <div className={s.card}>
      <div className={s.card__image_container}>
        <img src={image} alt={title} className={s.card__image} />
      </div>
      <div className={s.card__content}>
        <div className={s.card__ttl_descr_wr}>
          <h3 className={s.card__title}>{title}</h3>
          <p className={s.card__description}>{description}</p>
        </div>
        <div className={s.card__footer}>
          <span className={s.card__price}>от {price} ₽</span>
          <Button type="primary" size="standart" buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
