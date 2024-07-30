import s from "./ProductCard.module.scss";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  buttonText: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  buttonText,
  isNew,
}) => {
  return (
    <div className={s.card}>
      <div className={s.cardImageContainer}>
        {isNew && <span className={s.newBage}>NEW</span>}
        <img src={image} alt={title} className={s.cardImage} />
      </div>
      <div className={s.cardContent}>
        <h3 className={s.cardTitle}>{title}</h3>
        <p className={s.cardDescription}>{description}</p>
        <div className={s.cardFooter}>
          <span className={s.cardPrice}>от {price} ₽</span>
          <button className={s.cardButton}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
