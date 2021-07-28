import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoanRecord from "./Pages/LoanRecord/LoanRecord";
function App() {
  return (
    <div className="App">
      <Router>
        <LoanRecord />
      </Router>
    </div>
  );
}

export default App;
