import { useItems } from "../../Context";
import RenderItems from "../../components/RenderItems";

function MidUp() {
  const { items } = useItems();
  const renderItems = items.slice(8, 16);

  return (
    <section className="proud-products-section">
      <h1>Products we are proud of</h1>
      <div>
        <RenderItems renderingItem={renderItems} />
      </div>
    </section>
  );
}

export default MidUp;
