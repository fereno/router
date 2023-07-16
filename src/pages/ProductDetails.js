import {Link, useParams} from "react-router-dom";
function ProductDetailsPage() {
  const param = useParams();
  return (
    <div>
      <p>product details</p>
      <p>{param.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
}
export default ProductDetailsPage;
