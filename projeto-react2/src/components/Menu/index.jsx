import { Link } from "react-router-dom/cjs/react-router-dom.min"

export const Menu = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/abc">Abc</Link>
    </nav>
  );
};
