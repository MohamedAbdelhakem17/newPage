import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Home from "../Pages/Home"
import SuccessSubmit from "../component/SuccessSubmit/SuccessSubmit"
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<SuccessSubmit />} />
        </Routes>
    </Router>
  );
}

export default App;
