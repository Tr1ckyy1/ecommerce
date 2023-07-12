import { useParams } from "react-router-dom";
import { useItems } from "../../Context";
import "./CategoriesCurrentItem.css";
import { useState } from "react";

function CategoriesCurrentItem() {
  const { items } = useItems();
  const { id } = useParams();

  const currentItem = items.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(currentItem.img);
  const [currentPrice, setCurrentPrice] = useState(currentItem.price);
  const [quantity, setQuantity] = useState(1);

  const otherImages = currentItem.otherImgs.map((image) => (
    <button onClick={(e) => setCurrentImage(e.target.src)} key={image}>
      <img src={image} />
    </button>
  ));

  function increase() {
    setCurrentPrice((oldPrice) => oldPrice + currentItem.price);
    setQuantity((oldQuantity) => oldQuantity + 1);
  }

  function decrease() {
    setCurrentPrice((oldPrice) => oldPrice - currentItem.price);
    setQuantity((oldQuantity) => oldQuantity - 1);
  }

  return (
    <section className="product-data-container">
      <div className="left-side">
        <div className="main-img-container">
          <img className="main-img" src={currentImage} />
        </div>
        <div className="other-images-container">
          <button onClick={(e) => setCurrentImage(e.target.src)}>
            <img src={currentItem.img} />
          </button>
          {otherImages}
        </div>
      </div>
      <div className="right-side">
        <h1>{currentItem.description}</h1>
        <div className="item-details-purchase">
          <p className="full-description">{currentItem.specs}</p>
          <div className="quantity-container">
            <p className="quant">Quantity:</p>
            <div className="quantity">
              <button onClick={decrease}>-</button>
              <p className="item-quantity">{quantity}</p>
              <button onClick={increase}>+</button>
            </div>
            <h3 className="quantity-price">{currentPrice}.00$</h3>
          </div>
          <div className="shop-buttons">
            <button className="btn-black add">add to cart</button>
            <button className="btn-buy">buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesCurrentItem;
