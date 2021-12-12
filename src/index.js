import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");

const REACT_18 = true;

if (REACT_18) {
  ReactDOM.createRoot(root).render(
    <App callback={(ref) => console.log(ref.tagName)} />
  );
} else {
  ReactDOM.render(<App />, root);
}
