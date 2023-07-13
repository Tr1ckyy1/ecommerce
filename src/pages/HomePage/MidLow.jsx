import { Link } from "react-router-dom";
import banner from "../../images/banner/banner1.jpg";

function MidLow() {
  return (
    <section className="living">
      <div className="living-left">
        <h1>
          <span>Creative harmonious</span> living
        </h1>
        <p>
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="categories?type=Furniture"
        >
          shop now
        </Link>
      </div>
      <div className="living-right">
        <img src={banner} />
      </div>
    </section>
  );
}

export default MidLow;
