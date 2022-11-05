import { useContext, useEffect, useState } from 'react';
import {Box, Grid , Container, Typography, Button } from '@material-ui/core'
import { allUsers, FollowUser } from '../../API/User';
import Loading from '../../Assets/images/loading.gif'
import { HandleErr } from '../../Utils/Utils';
import { AppContext } from '../../ContextApi/AppContext';
const  FindFriends = () => {
    const {UserGState , dispatchUser} = useContext(AppContext);
    const [users , setUsers ] = useState({});
    // to get all users 
    useEffect(()=>{
        (async()=>{
            await allUsers().then(res => {
                setUsers(res.data)
            }).catch(err => {
                HandleErr(err)
            })
        })()
    },[]);

    // follow user (add friend )
    const AddFriend = async (userID) => {
        await FollowUser(userID).then(res => {
            dispatchUser({type:"USER_INFO" , payload:res.data})
        }).catch(Err => {
            HandleErr(Err)
        })
    }

    if(Array.isArray(users)){
    return (
    <Box className='findFreinds'>
 
        <Container>
            <Box className='FriendsContainer'>
                <Typography variant='h5'>Find Devs</Typography>
                <Grid container spacing={1}>
                    {users.length&&users.map(user => (
                        <Grid item xs={4} md={2}>
                            <Box className='friend' display='flex' flexDirection='column' >
                                <img src={user.profile_pic} width='209px' height="209px" alt='friend name' />
                                <Box className='info'>
                                    <Typography variant="body2">{user.username}</Typography>
                                    <Button fullWidth variant='contained' color='primary' className={UserGState.info.following&&UserGState.info.following.includes(user._id)&&"unfollow"} onClick={() => AddFriend(user._id)}>
                                        {UserGState.info.following&&UserGState.info.following&&UserGState.info.following.includes(user._id) ? "UnFriend" : "+Add Friend"}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    </Box>
    )}else{
        return <img src={Loading} alt='please wait' className='loading' />
    }
}

export default FindFriends