import { instance } from "./DefaultAxios";

export const getAllJobs = () => instance.get('job'); 
export const getOneJob = (id) => instance.get(`job/${id}`); 

