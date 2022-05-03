import './App.css';
import { Counter } from './Counter';
import { Todo } from './Todo';

function App() {
  console.log("render")
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
