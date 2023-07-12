import { useParams } from "react-router-dom";
import { useItems } from "../../Context";
import "./CategoriesCurrentItem.css";
import { useState } from "react";

function CategoriesCurrentItem() {
  const { items } = useItems();

  const { id } = useParams();
  const currentItem = items.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(currentItem.img);

  const otherImages = currentItem.otherImgs.map((image) => (
    <img
      key={image}
      src={image}
      onMouseOver={(e) => setCurrentImage(e.target.src)}
    />
  ));

  return (
    <div className="product-data-container">
      <h1>{currentItem.description}</h1>
      <div className="left-side">
        <img className="big-img" src={currentImage} />
        <div className="small-images">
          <img
            src={currentItem.img}
            onMouseOver={(e) => setCurrentImage(e.target.src)}
          />
          {otherImages}
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
}

export default CategoriesCurrentItem;
