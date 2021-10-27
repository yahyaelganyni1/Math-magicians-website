import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/">Quote</Link>
      </ul>
    </nav>
  );
}
