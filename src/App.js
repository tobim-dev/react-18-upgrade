import { useEffect } from "react";

function App({ callback }) {
  useEffect(() => console.log("React rendered"), []);
  return (
    <div ref={callback}>
      <p>Hello World, React</p>
    </div>
  );
}

export default App;
