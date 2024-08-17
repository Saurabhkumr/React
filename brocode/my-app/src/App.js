import "./App.css";

function App() {
  const fruit = ["apple", "orange", "banana", "grapes", "mano", "watermelon"];
  const list = fruit.map((fruit) => <li>{fruit}</li>);
  return <ul>{list}</ul>;
}

export default App;
