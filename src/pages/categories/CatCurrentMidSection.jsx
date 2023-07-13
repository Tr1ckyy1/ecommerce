function CatCurrentMidSection({ currentItem }) {
  return (
    <section className="product-mid-container">
      <div>
        <h1>Texture:</h1>
        <p>{currentItem.texture}</p>
      </div>
      <div>
        <h1>Weight:</h1>
        <p>{currentItem.weight}</p>
      </div>
      <div>
        <h1>Size:</h1>
        <p>{currentItem.size}</p>
      </div>
    </section>
  );
}

export default CatCurrentMidSection;
