import { GlobalState } from "./context/globalState";
import { HomePage } from "./pages/HomePage/HomePage";


function App() {
  return (
    <div>
      <GlobalState>
      <HomePage/>
      </GlobalState>
    </div>
  );
}

export default App;
