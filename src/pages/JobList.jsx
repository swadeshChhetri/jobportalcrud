import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllJobs, deleteJob } from "../../services/jobService";
import { Eye, Pencil, Trash } from "lucide-react";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getAllJobs();
      setJobs(data);
    } catch (error) {
      toast.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await deleteJob(id);
      toast.success("Job deleted successfully!");
      fetchJobs();
    } catch (error) {
      toast.error("Error deleting job:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">JOB Listings</h2>
        <Link
          to="/jobs/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          + Add Job
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : jobs.length === 0 ? (
        <div className="text-center text-gray-500 mt-16">
          <p className="mb-2 text-lg">🚫 No jobs posted yet.</p>
          <p>
            <Link
              to="/jobs/add"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Be the first to add a job
            </Link>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white shadow-md rounded-lg p-4 pt-10 hover:shadow-lg transition relative"
            >
              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex z-10">
                <Link
                  to={`/jobs/${job._id}`}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full"
                  title="View"
                >
                  <Eye size={18} />
                </Link>
                <Link
                  to={`/jobs/edit/${job._id}`}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full"
                  title="Edit"
                >
                  <Pencil size={18} />
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full"
                  title="Delete"
                >
                  <Trash size={18} />
                </button>
              </div>

              {/* Job Info */}
              <h3 className="text-xl font-semibold text-gray-800 mt-3">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobList;
