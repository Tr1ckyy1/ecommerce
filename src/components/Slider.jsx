import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useItems } from "../Context";
import "./Slider.css";
import { useRef } from "react";

function Slider({ currentItem, id = null, setCurrentImage }) {
  const { items } = useItems();
  const itemsReels = currentItem
    ? items
        .filter((item) => item.category === currentItem.category)
        .filter((item) => item.id !== Number(id))
    : items
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

  const wheelRefs = useRef(null);

  function scroll(img) {
    window.scrollTo(0, 0);
    setCurrentImage(img);
  }

  const renderReels = itemsReels.map((item) => (
    <Link
      className="scroll"
      onClick={() => scroll(item.img)}
      to={`/categories/${item.id}`}
      key={item.id}
    >
      <div className="reel-item">
        <img src={item.img} />
        <p>{item.description}</p>
        <h1>${item.price}</h1>
      </div>
    </Link>
  ));

  function slideLeft() {
    wheelRefs.current.scrollLeft -= 237;
  }

  function slideRight() {
    wheelRefs.current.scrollLeft += 237;
  }

  return (
    <section className="slider">
      <div className="top-side">
        <h1>{currentItem ? "People also viewed" : "Trending Now"}</h1>
        <div className="arrows">
          <button>
            <BsArrowLeftShort onClick={slideLeft} />
          </button>
          <button onClick={slideRight}>
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div ref={wheelRefs} className="bottom-side">
        {renderReels}
      </div>
    </section>
  );
}

export default Slider;
