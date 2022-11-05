import { useState , useContext, useEffect  } from 'react';
import {Box , Button, Grid, Typography } from '@material-ui/core'
import AddPost from '../../components/AddPost/AddPost';
import CreatePost from '../../components/CreatePost/CreatePost';
import Navbar from '../../components/Navbar/Navbar';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import Story from '../../components/Story/Story';
import { AppContext } from '../../ContextApi/AppContext';
import { ProfileInfo } from '../../API/User';
import { HandleErr } from '../../Utils/Utils';
import Loading from '../../Assets/images/loading.gif';
import { Link } from 'react-router-dom';
import { FollowingPosts } from '../../API/Post';

const Home = () => {
    const [createPost , setCreatePost] = useState(false);
    const {UserGState , dispatchUser , PostGState , dispatchPost} = useContext(AppContext);
    const [Waiting , setWaiting ] = useState(false)
    window.onclick = () => {setCreatePost(false)}
    useEffect(() => {
            (async() =>{
                setWaiting(true);
                // get all following posts
                await FollowingPosts().then(res => {
                    console.log(res.data)
                    dispatchPost({type:"FOLLOWING_POSTS" , payload:res.data});
                    setWaiting(false)
                }).catch(err => {
                    setWaiting(false)
                    HandleErr(err)
                })
                
            })();
    },[])
    if(!Waiting){
    return(
        <Box className='Home' style={{minHeight:"100vh" , height:'100%'}}>
            {createPost&& <CreatePost Open = {setCreatePost} />}
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems='center' flexDirection="column">
                        <AddPost OpenCreatePost = {setCreatePost} />
                        {!PostGState.userPosts.length && !PostGState.all_Posts.length ? 
                            <Box className='noPosts' marginY="30px" display='flex' flexDirection='column' justifyContent='center' textAlign='center'>
                                <Typography variant='h6' >No Posts yet </Typography>
                                <Box marginTop='10px'>
                                    <Link to='/friends'>
                                        <Button variant='contained'  color='primary'>Find Friends</Button>
                                    </Link>
                                </Box>
                            </Box>
                            :
                            PostGState.all_Posts.map(post  => (
                                <Post key={post._id} data={post}  />
                            ))
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )}else{
        return <img src={Loading} className='loading' />
    }
}

export default Home;