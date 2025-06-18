import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { getJobById } from '../services/jobService';
import { getJobById } from "../services/jobService";
import Loader from "../components/Loader";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id);
        setJob(data);
        console.log(data);
      } catch (error) {
        toast.error("Error fetching job:", error);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) return <Loader />;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
      <p className="text-lg text-gray-600 mb-1">{job.company}</p>
      <p className="text-gray-500 mb-4">{job.location}</p>

      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Job Description</h3>
        <p className="text-gray-700 whitespace-pre-line">{job.description}</p>

        {job.jobType && (
          <div className="mt-4">
            <h4 className="font-medium">Job Type:</h4>
            <p className="text-gray-700">{job.jobType}</p>
          </div>
        )}

        {job.salary && (
          <div className="mt-4">
            <h4 className="font-medium">Salary:</h4>
            <p className="text-gray-700">{job.salary}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          to={`/jobs/edit/${job._id}`}
          className="text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700bg-blue-600 hover:bg-blue-700"
        >
          Edit Job
        </Link>
        <Link
          to="/jobs"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back to Jobs
        </Link>
      </div>
    </div>
  );
}

export default JobDetail;
