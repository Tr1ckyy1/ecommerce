import { useParams } from "react-router-dom";
import { useItems } from "../../Context";
import "./CategoriesCurrentItem.css";
import { useState } from "react";
import CatCurrentTopSection from "./CatCurrentTopSection";
import CatCurrentMidSection from "./CatCurrentMidSection";
import Slider from "../../components/Slider";

function CategoriesCurrentItem() {
  const { items } = useItems();
  const { id } = useParams();

  const currentItem = items.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(currentItem.img);
  const [currentPrice, setCurrentPrice] = useState(currentItem.price);
  const [quantity, setQuantity] = useState(1);

  function setImage(e) {
    setCurrentImage(e.target.src);
  }

  const otherImages = currentItem.otherImgs.map((image) => (
    <button onClick={(e) => setImage(e)} key={image}>
      <img src={image} />
    </button>
  ));

  function increase() {
    setCurrentPrice((oldPrice) => oldPrice + currentItem.price);
    setQuantity((oldQuantity) => oldQuantity + 1);
  }

  function decrease() {
    if (quantity === 1) return;
    setCurrentPrice((oldPrice) => oldPrice - currentItem.price);
    setQuantity((oldQuantity) => oldQuantity - 1);
  }

  return (
    <>
      <CatCurrentTopSection
        currentImage={currentImage}
        currentItem={currentItem}
        otherImages={otherImages}
        increase={increase}
        decrease={decrease}
        quantity={quantity}
        currentPrice={currentPrice}
        setCurrentImage={setCurrentImage}
      />
      <CatCurrentMidSection currentItem={currentItem} />
      <Slider currentItem={currentItem} id={id} setCurrentImage={setCurrentImage}/>
    </>
  );
}

export default CategoriesCurrentItem;
