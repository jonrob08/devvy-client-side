import { useContext } from "react";
import { Box , List , ListItem , Typography } from "@material-ui/core"
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { AppContext } from "../../ContextApi/AppContext";

const AddPost = ({OpenCreatePost}) => {
    const {UserGState} = useContext(AppContext);
    return(
        <Box className="addPost">
            <Box className="TextArea" display="flex">
                <img src={UserGState.info.profile_pic} alt="profile" width="40px" height="40px" />
                <input  placeholder={`What's on your mind, ${UserGState.info.username} ?`}  onClick={(e) => {e.stopPropagation(); OpenCreatePost(true) }}/>
            </Box>
            
        </Box>
    )
}
export default AddPost;