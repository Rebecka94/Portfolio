import { Link } from "react-router-dom";
import Button from "../components/ui/Button/Button";
import Text from "../components/ui/Text/Text";

export default function App() {
  return (
    <div className="App">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>

      <Text size="medium">Text MD</Text>
      <Text size="small">Text SM</Text>
      <nav>
        <Link to="/about">About</Link>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button size="lg" variant="secondary">large</Button>
      </nav>
    </div>
  );
}
