import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

// 🔹 Create Job
export const createJob = async (jobData) => {
  const res = await axios.post(API_URL, jobData);
  return res.data;
};

// 🔹 Get All Jobs
export const getAllJobs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// 🔹 Get Single Job
export const getJobById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// 🔹 Update Job
export const updateJob = async (id, updatedJob) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedJob);
  return res.data;
};

// 🔹 Delete Job
export const deleteJob = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
