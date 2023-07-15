import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";

// const router = createBrowserRouter([
//   {path: "/", element: <HomePage />},
//   {path: "/products", element: <Products />},
// ]);
const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products />} />
  </Route>
);
const router = createBrowserRouter(routeDefinition);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
