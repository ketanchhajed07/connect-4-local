import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="testlogo.svg" alt="Connect Four Logo" />
    </Link>
  );
}

export default Logo;
