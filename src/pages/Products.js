import {Link} from "react-router-dom";

function ProductsPage() {
  const DUMMY_PRODUCTS = [
    {id: "p1", title: "product 1", price: 100},
    {id: "p2", title: "product 2", price: 200},
    {id: "p3", title: "product 3", price: 300},
  ];

  return (
    <>
      <h1>products page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((itemProduct) => (
          <li>
            <Link to={itemProduct.id}>{itemProduct.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductsPage;
