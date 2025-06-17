import { useState, useEffect } from 'react';

function JobForm({ onSubmit, initialJob = {} }) {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: '',
    ...initialJob,
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(job);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded shadow">
      <div>
        <label className="block font-medium">Job Title</label>
        <input
          type="text"
          name="title"
          value={job.title}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <div>
        <label className="block font-medium">Company</label>
        <input
          type="text"
          name="company"
          value={job.company}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <div>
        <label className="block font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={job.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <div>
        <label className="block font-medium">Salary</label>
        <input
          type="text"
          name="salary"
          value={job.salary}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <div>
        <label className="block font-medium">Job Description</label>
        <textarea
          name="description"
          value={job.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {initialJob?._id ? 'Update Job' : 'Add Job'}
      </button>
    </form>
  );
}

export default JobForm;

