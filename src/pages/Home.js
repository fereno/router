import {Link, useNavigate} from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("products");
  };
  return (
    <>
      <h1>HomePage ...</h1>
      <p>
        Go to Products page <Link to="products">click here</Link>
      </p>
      <button onClick={navigateHandler}>go to products</button>
    </>
  );
}
export default HomePage;
