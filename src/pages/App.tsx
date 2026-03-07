import { Link } from "react-router-dom";
import Button from "../components/ui/Button/Button";
import Text from "../components/ui/Text/Text";

export default function App() {
  return (
    <div className="App">
      <Text size="xl">Dashboard</Text>
      <nav>
        <Link to="/about">About</Link>
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
      </nav>
    </div>
  );
}
