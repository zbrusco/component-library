import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  return (
    <>
      <Star />
      <br />
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Sport</Menu.Item>
          <Menu.Item>Sport</Menu.Item>
          <Menu.Item>Sport</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
