import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./routes/Main";
import SelfDiagnose from "./routes/SelfDiagnose";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/routes/SelfDiagnose" element={<SelfDiagnose />} />
      </Routes>
    </Router>
  )
}

export default App; 
