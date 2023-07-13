import { Link } from "react-router-dom";

function CatCurrentTopSection({
  currentImage,
  currentItem,
  otherImages,
  increase,
  decrease,
  quantity,
  currentPrice,
  setCurrentImage,
}) {
  return (
    <section className="product-top-container">
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

export default CatCurrentTopSection;
