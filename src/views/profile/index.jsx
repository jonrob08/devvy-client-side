import { useState, useEffect, useContext } from 'react';
import {Box, Button, Grid, Typography, useTheme, ListItem, List, Container, Link, IconButton} from '@mui/material';
import { useParams } from 'react-router-dom';
// import some icons from material ui
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ProfilePic from '../../Assets/images/profile.jpeg'
import AddIcon from '@material-ui/icons/Add';   
import EditIcon from '@material-ui/icons/Edit';

// import some components 
import Navbar from '../../components/Navbar/Navbar';
import AddPost from '../../components/AddPost/AddPost'
import CreatePost from '../../components/CreatePost/CreatePost'
import UserInfo from '../../components/UserInfo/UserInfo';
import Photos from '../../components/Photos/Photos';
import Friends from '../../components/Friends/Friends';
import Post from '../../components/Post/Post'
import { editUser, ProfileInfo, getJobs } from '../../API/User';
import { HandleErr } from '../../Utils/Utils';
import { userPosts } from '../../API/Post';
import { AppContext } from '../../ContextApi/AppContext';
import Loading from '../../Assets/images/loading.gif'
import './profile.scss'
import { tokens } from '../../theme';
import { ColorModeContext } from '../../theme';
import { UserProfile } from '../../API/User';

const Profile = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    const {PostGState , dispatchPost , UserGState, dispatchUser} = useContext(AppContext);
    const{id} = useParams();
    const [createPost , setCreatePost] = useState(false);
    const [postData , setPostData] = useState({});
    window.onclick = () => {setCreatePost(false)}
    useEffect(() => {
        console.log(PostGState.userPosts)
        if(id){
            (async () => {
                await UserProfile(id).then(res => {
                    dispatchUser({type:"USER_INFO" , payload:res.data})
                }).catch(err => HandleErr(err));
            })();
        }else{
            // check if user data stored in global strate or not 
            if (!PostGState.userPosts.length || !Object.keys(UserGState.info).length ){
                //get signed in user profile data
                (async() => {
                    try {
                        const [info , posts ] = await Promise.all([
                            ProfileInfo(),
                            userPosts()
                        ])
                        //store posts in global state 
                        dispatchPost({type:"USER_POSTS" , payload:posts.data})
                        dispatchUser({type:"USER_INFO" , payload:info.data})
                    } catch (error) {
                        HandleErr(error)
                    }
                })()
            }
        }
    },[]);
    //update profile info like profile pic and cover pic for now 
    const updateProfile = async (value , field) => {
        var formData = new FormData();
        formData.append(field , value);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        await editUser(formData , config).then(res => {
            dispatchUser({type:"USER_INFO" , payload:res.data})
        }).catch(err => HandleErr(err))
    }

    if(Object.keys(UserGState.info).length ){
    return (
        <Box className='Profile'>
            {createPost&& <CreatePost Open = {setCreatePost} Data={postData} />}
            {/* cover section */}
            <Box className={`TopPart ${!UserGState.info.cover_pic ? "bg-green" : ""}`} display='flex' alignItems='center' flexDirection='column'>
                <Box className={`CoverImage ${!UserGState.info.cover_pic ? "emptyImg" : ""}`}>
                    {UserGState.info.cover_pic&&
                        <img src={UserGState.info.cover_pic} width='100%' height='350px' />
                    }
                    <input id='coverPhoto' type='file' hidden onChange={(e) => updateProfile( e.target.files[0] , 'cover_pic')}/>
                    <label htmlFor='coverPhoto'>
                        <CameraAltIcon sx={colors.primary[800]}/> <span className='text'> Edit Cover Photo</span>
                    </label>
                </Box>
            </Box>
            {/* Profile header section */}
            <Box className='ProfileTitle'>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box className='leftSide' display='flex' alignItems='end'>
                            <Box className='profilePic'>
                                <img src={UserGState.info.profile_pic} alt="profilepic" width='168px' height='168px' />
                                <input type="file" hidden id='profile-Img' onChange={(e) => updateProfile( e.target.files[0] , 'profile_pic')}/>
                                <label htmlFor="profile-Img"> <CameraAltIcon /></label>
                            </Box>
                            <Box className='info'>
                                <Typography variant='h5'>{UserGState.info.username}</Typography>
                                <Typography variant="body1">{UserGState.info.followers&&UserGState.info.followers.length} friends</Typography>
                                <Box className='friendsPics'>
                                    <img src="https://cdn.pixabay.com/photo/2018/11/22/08/05/thor-3831290__340.png" alt="frineds Pic" width="32px" height='32px' />
                                    <img src="https://cdn.pixabay.com/photo/2022/03/16/06/18/bird-7071662__340.jpg" alt="frineds Pic" width="32px" height='32px' />
                                    <img src="https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332__340.jpg" alt="frineds Pic" width="32px" height='32px' />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display='flex' className='BTNs' justifyContent='end'>
                            <Button variant='contained'> <EditIcon /> Edit profile</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* Navigation section  */}
            
            {/* Post section  */}
            <Box className='PostsSection'>
                <Container>
                    <Grid container >
                        <Grid item xs={12} md={5}>
                            <Box className='LeftSide'>
                                <UserInfo />
                                
                                <Friends />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <AddPost OpenCreatePost = {setCreatePost} />
                            {PostGState.userPosts.map(post  => (
                                <Post key={post._id} data={post} OpenCreatePost = {setCreatePost} setPostData={setPostData} />
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
    }else{
        return <img src={Loading} alt='please wait' className='loading' />
    }
}

export default Profile;
