import {useState , useContext} from 'react';
import {Box , Grid , Container, Typography , FormControl  , TextField, Button} from '@material-ui/core'
import Signup from '../../components/Signup/Signup';
import { SignIn } from '../../API/Auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../../ContextApi/AppContext';
import bgImg from "../../Assets/images/pexels-cottonbro-studio-9655624.jpg";
import Topnav from '../../components/Navbar/Topnav';
import { HandleErr } from '../../Utils/Utils';
import './login.scss'

const Login = () => {
    const {dispatchUser} = useContext(AppContext);
    const [user , setUser] = useState({});
    const [signupModal , setSignupModal] = useState(false);
    const [Err , setErr] = useState('');
    const [waiting , setWaiting] = useState(false)
    const Navigate = useNavigate()
    //get data from inputs 
    const userForm = (e , field) => {
        setUser({...user , [field]:e.target.value});
    }
    // handle submit form 
    const HandleSumbit = async(e) => {
        e.preventDefault();
        setWaiting(true);
        setErr("")
        await SignIn(user).then(res => {
            localStorage.setItem("AccessToken" , res.data.token);
            setWaiting(false);
            dispatchUser({type:"LOGIN" , payload:res.data})
            window.location.replace('/dashboard')
            // Navigate('/')
        }).catch(err => {
            setWaiting(false)
            setErr(err.response.data.message)
            HandleErr(err)
        });
    }
    // to close sign up modal when click outside form
    // window.onclick = () => {
    //     setSignupModal(false);
    // }
    return(
        <div style={{
            backgroundImage: `url(${bgImg})`,
            backgroundColor: "white",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'}}>
                <Topnav />
        <Box className='Login'>
            {signupModal&&<Signup open={setSignupModal} />}
            <Container>
                <Grid container spacing={10}>
                    
                    <Grid item xs={12} md={6}>
                        <Box className='form' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                            <FormControl fullWidth className='MuiForm'>
                                <TextField onChange={(e) => userForm(e , "email")} variant='outlined' placeholder='Email address or phone number' autoComplete='true'  required error={Err.length ? true : false} />
                                <TextField type='password'  onChange={(e) => userForm(e , "password")} variant='outlined' placeholder='Password' autoComplete='false' required error={Err.length ? true : false} />
                                <Typography color='secondary'  align='center' display='block'>{Err}</Typography> <br/>
                                <Button type='submit ' fullWidth variant='contained' color='primary'  onClick={HandleSumbit}> {waiting ? <CircularProgress /> : "Log in"} </Button>
                            </FormControl>
                            <Typography className='forget' color='primary' align='center' variant='caption'>Forget Password ?</Typography>
                            <Button disabled={waiting} variant='contained' className='newAcc' onClick={(e) => {e.stopPropagation();setSignupModal(true)}}>Create New Account</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>
    )
}
export default Login;