import JobForm from "../components/JobForm";
import { useNavigate } from "react-router-dom";
import { createJob } from "../services/jobService";
import { toast } from "react-toastify";
import { useState } from "react";

function AddJob() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (jobData) => {
    try {
      setLoading(true);
      await createJob(jobData);
      toast.success("Job posted successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to post job. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
      <JobForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

export default AddJob;
