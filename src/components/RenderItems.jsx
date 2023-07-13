import "./RenderItems.css";
import { Link } from "react-router-dom";

function RenderItems({ renderingItem }) {
  const renderAll = renderingItem.map((item) => (
    <Link
      key={item.id}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      to={`/categories/${item.id}`}
    >
      <div className="item">
        <img src={item.img} />
        <p>{item.description}</p>
        <h1>${item.price}</h1>
      </div>
    </Link>
  ));
  return <div className="all-items-container">{renderAll}</div>;
}

export default RenderItems;
