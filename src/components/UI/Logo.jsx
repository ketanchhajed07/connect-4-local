import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="logo.svg" alt="Connect Four Logo" />
    </Link>
  );
}

export default Logo;
