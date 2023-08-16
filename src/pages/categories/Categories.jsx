import { useItems } from "../../Context";
import "./Categories.css";
import { Link, useSearchParams } from "react-router-dom";
import RenderItems from "../../components/RenderItems";
import NotFound from "../../components/NotFound";

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const { items, windowWidth } = useItems();

  const type = searchParams.get("type");

  // Set searchparams for filtering
  function handleFilterChange(e) {
    e.target.value === "All"
      ? setSearchParams("")
      : setSearchParams({ type: e.target.value });
  }
  // filter items with searchparams, if not just map every item
  const filteredItems = type
    ? items.filter((item) => item.category === type.toLowerCase())
    : items;

  // Finding unique categories with set and converting back to arrays so its being mapped to render
  
  const uniqueCategories = new Set(items.map((item) => item.category));
  const convertBackToArray = Array.from(uniqueCategories);
  const options = convertBackToArray.map((item) => (
    <option key={item}>{item[0].toUpperCase() + item.slice(1)}</option>
  ));

  const whichQueryToRender = type ? type : "ALL";

  const doesPageExist = items.some(
    (item) => item.category === type?.toLowerCase()
  );
  if (type && !doesPageExist) return <NotFound />;

  return (
    <section>
      <div className="display-top">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to=".."
        >
          &larr; Home
        </Link>
        {windowWidth > 600 && <h1>{whichQueryToRender}</h1>}
        <select value={whichQueryToRender} onChange={handleFilterChange}>
          <option>{"All"}</option>
          {options}
        </select>
      </div>
      <RenderItems renderingItem={filteredItems} />
    </section>
  );
}

export default Categories;
