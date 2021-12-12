import { useEffect } from "react";

function App() {
  useEffect(() => console.log("React rendered"));
  return (
    <div>
      <p>Hello World, React</p>
    </div>
  );
}

export default App;
