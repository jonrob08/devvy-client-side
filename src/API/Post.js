import { instance } from "./DefaultAxios";

// create new post 
export const AddNewPost = (data) => instance.post('post/create' , data); 
//get user posts 
export const userPosts = () => instance.get('post/all' , {headers:{Authorization:`Bearer ${localStorage.getItem('AccessToken')}`}})
// add comment 
export const addComment = (data) => instance.post(`post/comment/add` , data);
// like and unlike 
export const Like = (postId) => instance.put(`/post/like/${postId}`)
//delete post 
export const DeletePost = (postID) => instance.delete(`post/delete/${postID}`);
//edit post 
export const EditPost = (postID, data) => instance.put(`post/edit/${postID}` , data);
// get all following posts 
export const FollowingPosts = () => instance.get('post/following',{headers:{Authorization:`Bearer ${localStorage.getItem('AccessToken')}`}})