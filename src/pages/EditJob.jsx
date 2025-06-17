import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JobForm from '../components/JobForm';
import { getJobById, updateJob } from '../../services/jobService';

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id);
        setJob(data);
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };
    fetchJob();
  }, [id]);

  const handleUpdate = async (updatedJob) => {
    try {
      await updateJob(id, updatedJob);
      navigate('/jobs');
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  if (!job) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit JOB</h2>
      <JobForm initialJob={job} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditJob;
