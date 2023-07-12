import { Link } from "react-router-dom";
import Main1 from "../../images/header/home-img-1.jpg";
import Main2 from "../../images/header/home-img-2.jpg";
import Main3 from "../../images/header/home-img-3.jpg";
import Main4 from "../../images/header/home-img-4.jpg";
import "./HomeTop.css";

function HomePageTop() {
  return (
    <section className="homepage-section-1">
      <div className="luxury grid-one">
        <Link to="categories/?type=Furniture">
          <div className="overlay"></div>
          <img src={Main1} />
          <p>Live Comfortably</p>
        </Link>
      </div>
      <div className="luxury grid-two">
        <Link to="categories/?type=Skin-care">
          <div className="overlay"></div>
          <img src={Main2} />
          <p>Skincare</p>
        </Link>
      </div>

      <div className="luxury grid-four">
        <Link to="categories/?type=Kitchen">
          <div className="overlay"></div>
          <img src={Main3} />
          <p>Kitchen</p>
        </Link>
      </div>
      <div className="luxury grid-four-low">
        <Link to="categories/?type=Electronic">
          <div className="overlay"></div>
          <img src={Main4} />
          <p>Electronics</p>
        </Link>
      </div>
    </section>
  );
}

export default HomePageTop;
