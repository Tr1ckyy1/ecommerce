import { Link } from "react-router-dom";
import "./CategoriesItems.css";

function CategoriesItems({ item }) {
  return (
    <Link to={`${item.id}`}>
      <div className="item">
        <img src={item.img} />
        <p>{item.description}</p>
        <h1>${item.price}</h1>
      </div>
    </Link>
  );
}

export default CategoriesItems;
