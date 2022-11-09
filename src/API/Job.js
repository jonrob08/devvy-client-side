import { instance } from "./DefaultAxios";

export const getAllJobs = () => instance.get("job");
export const getOneJob = (id) => instance.get(`job/${id}`);
export const createJob = (data) => instance.post(`job`, data);
export const createJobTask = (jobId, data) =>
  instance.post(`job/${jobId}/task`, data);
export const updateJobTask = (jobId, taskId, data) =>
  instance.put(`job/${jobId}/task/${taskId}`, data);
export const deleteJobTask = (jobId, taskId) =>
  instance.delete(`job/${jobId}/task/${taskId}`);
export const createJobTaskItem = (jobId, taskId, data) =>
  instance.post(`job/${jobId}/task/${taskId}/item`, data);
export const updateJobTaskItem = (jobId, taskId, itemId, data) =>
  instance.put(`job/${jobId}/task/${taskId}/item/${itemId}`, data);
export const deleteJobTaskItem = (jobId, taskId, itemId) =>
  instance.delete(`job/${jobId}/task/${taskId}/item/${itemId}`);
