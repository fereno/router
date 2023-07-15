import {Link} from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>HomePage ...</h1>
      <p>
        Go to Products page <Link to="/products">click here</Link>
      </p>
    </>
  );
}
export default HomePage;
