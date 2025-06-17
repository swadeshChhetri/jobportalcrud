import JobForm from '../components/JobForm';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../../services/jobService';

function AddJob() {
  const navigate = useNavigate();

  const handleSubmit = async (jobData) => {
    try {
      await createJob(jobData);
      navigate('/'); // Redirect after submission
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
      <JobForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddJob;
