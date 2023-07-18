import { useParams } from "react-router-dom";
import { useItems } from "../../Context";
import "./CategoriesCurrentItem.css";
import { useState } from "react";
import CatCurrentTopSection from "./CatCurrentTopSection";
import CatCurrentMidSection from "./CatCurrentMidSection";
import Slider from "../../components/Slider";
import NotFound from "../../components/NotFound";

function CategoriesCurrentItem() {
  const { items } = useItems();
  const { id } = useParams();

  const doesPageExist = items.some((item) => item.id === Number(id));
  console.log(doesPageExist);
  if (!doesPageExist) return <NotFound />;

  const currentItem = items.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(currentItem.img);

  function setImage(e) {
    setCurrentImage(e.target.src);
  }

  const otherImages = currentItem.otherImgs.map((image) => (
    <button onClick={(e) => setImage(e)} key={image}>
      <img src={image} />
    </button>
  ));

  return (
    <>
      <CatCurrentTopSection
        currentImage={currentImage}
        currentItem={currentItem}
        otherImages={otherImages}
        setCurrentImage={setCurrentImage}
        id={id}
      />
      <CatCurrentMidSection currentItem={currentItem} />
      <Slider
        currentItem={currentItem}
        id={id}
        setCurrentImage={setCurrentImage}
      />
    </>
  );
}

export default CategoriesCurrentItem;
