import { instance } from "./DefaultAxios";

//get signed user profile info 
export const ProfileInfo = () => instance.get('user/profile');
//get user profile (other users )
export const UserProfile = (id) => instance.get(`user/profile/${id}`);
// get all users 
export const allUsers = () => instance.get('user/all');
// follow and unfollow user 
export const FollowUser = (userID) => instance.put(`user/follow/${userID}`);
//edit user data 
export const editUser = (data) => instance.put('user/edit' , data);
//grab jobs
export const getJobs = (data) => instance.get('job/', data)