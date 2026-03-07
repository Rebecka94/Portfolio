import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="App">
      <h1>About Us</h1>
      <p>Welcome to our about page!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
