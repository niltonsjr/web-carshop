import "./styles.css";
import ImageHeader from "assets/images/car-header.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card-top border-radius-10">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={ImageHeader} alt="Car" />
        </div>
      </div>
      <div className="home-card-bottom border-radius-10">
        <Link to="/products">
          <button type="button" className="btn btn-secondary">
            VER CATÁLOGO
          </button>
        </Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
