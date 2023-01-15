import './App.css';
import Ballot from './Components/Ballot/Ballot';
import { SelectionsProvider } from './Providers/Selections.Provider';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <SelectionsProvider>
      <Ballot />
      </SelectionsProvider>
    </div>
  );
}

export default App;
