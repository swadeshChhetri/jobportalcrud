import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
``;
