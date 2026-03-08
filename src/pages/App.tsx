import { Link } from "react-router-dom";
import Button from "../components/ui/Button/Button";
import Text from "../components/ui/Text/Text";

export default function App() {
  return (
    <div className="App">
      <Text size="xl">Text XL</Text>
      <Text size="lg">Text LG</Text>
      <Text size="md">Text MD</Text>
      <Text size="sm">Text SM</Text>
      <nav>
        <Link to="/about">About</Link>
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
      </nav>
    </div>
  );
}
