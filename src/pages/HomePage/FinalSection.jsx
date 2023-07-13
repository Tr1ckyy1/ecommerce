import { Link } from "react-router-dom";
import banner from "../../images/banner/banner2.jpg";

function FinalSection() {
  return (
    <section className="living">
      <div className="living-right">
        <img src={banner} />
      </div>
      <div className="living-left">
        <h1>
          <span>Comfortable & Elegante </span> Living
        </h1>
        <p>
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <Link onClick={() => window.scrollTo(0, 0)} to="categories">
          shop now
        </Link>
      </div>
    </section>
  );
}

export default FinalSection;
