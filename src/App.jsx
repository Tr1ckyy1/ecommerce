import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";

import Categories from "./pages/categories/Categories";
import { ItemsProvider } from "./Context";
import CategoriesCurrentItem from "./pages/categories/CategoriesCurrentItem";
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="categories" element={<Categories />}></Route>
      <Route path="categories/:id" element={<CategoriesCurrentItem />} />
      <Route path="products" element={<h1>This is products</h1>}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <ItemsProvider>
      <RouterProvider router={router} />
    </ItemsProvider>
  );
}

export default App;
