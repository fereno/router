import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
//const router = createBrowserRouter(routeDefinition);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      // {path: "", element: <HomePage />},
      {index: true, element: <HomePage />},
      {path: "products", element: <ProductsPage />},
      {path: "products/:productId", element: <ProductDetailsPage />},
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
