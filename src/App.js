import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./routes/Main";
import SelfDiagnose from "./routes/SelfDiagnose";
import Exercise from "./routes/Exercise";
import Goal from "./routes/Goal";
import FAQ from "./routes/FAQ";
import Pain from "./routes/Pain";
import Recommend from "./routes/Recommend";

function App() {
  return <Router>
    <Routes>
      <Route path="routes/SelfDiagnose" element={<SelfDiagnose />} />
      <Route path="routes/Pain" element={<Pain />} />
      <Route path="routes/Recommend" element={<Recommend />} />
      <Route path="routes/Exercise" element={<Exercise />} />
      <Route path="routes/Goal" element={<Goal />} />
      <Route path="routes/FAQ" element={<FAQ />} />
      <Route path="/remotecare" element={<Main />} />
    </Routes>
  </Router>;
}

export default App; 
