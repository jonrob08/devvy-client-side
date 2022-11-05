import bgImg from "../../Assets/images/pexels-cottonbro-studio-9655624.jpg";
import Topnav from '../../components/Navbar/Topnav';


function Main() {
    return (
        <div style={{
            backgroundImage: `url(${bgImg})`,
            backgroundColor: "white",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <Topnav />
            <h1>Main page</h1>
        </div>
    )
}

export default Main;