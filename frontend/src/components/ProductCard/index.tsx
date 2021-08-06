import "./styles.css";
import CarImage from "assets/images/car-card.png";

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="image-container">
        <img src={CarImage} alt="Car" />
      </div>
      <div className="product-content-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button className="btn btn-secondary">COMPRAR</button>
      </div>
    </div>
  );
};

export default ProductCard;