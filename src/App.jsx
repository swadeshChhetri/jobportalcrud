import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';

import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs/add" element={<AddJob />} />
        <Route path="/jobs/edit/:id" element={<EditJob />} />
      </Routes>
    </Router>
  );
}

export default App;
``;
