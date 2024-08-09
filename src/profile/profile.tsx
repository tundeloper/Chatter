import StyledNav from "./styledProfile"
import { StyledUser } from "./user"
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import NotificationsIcon from '@mui/icons-material/Notifications';import WriteSVG from '../SVGs/writeSVG'
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from "react-router-dom";

const Profile = () => {
    return(<div><div style={{padding: '.5rem', background: 'blue'}}>
        <StyledNav>
            <StyledUser />
            <div style={{fontSize: '2rem', fontFamily: "Playwrite HU", color: 'white'}}>Chatter</div>
            <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
                <div>
                    {/* <CommentTwoToneIcon /> */}
                    <Link to={'/write'}><WriteSVG /></Link>
                </div>
                <div>
                   <NotificationsIcon style={{color: 'red'}} fontSize="large" />
                </div>
            </div>
        </StyledNav>
        </div>
        {/* <h1 style={{textAlign: 'center', color: 'red'}}>You've not publish any blog yet</h1>
        <h1 style={{textAlign: 'center', color: 'red'}}>Write your first blog </h1> */}
        <h3>Babatunde's Blog</h3>
        <div style={{margin: '0 2rem 1rem 2rem', padding: '.5rem', background: '#4c4cca94', borderRadius: '1rem'}}>
            <div>
            <h1 style={{marginBottom: '-.5rem'}}>Introduction to Javascript</h1>
            <p style={{color: '#6a6adc', fontSize: '1rem', marginBottom: '-.1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, neque, corporis sit, similique distinctio omnis vel aperiam blanditiis voluptatem facilis sed aliquam nemo molestias earum nihil repellat eius rerum explicabo!</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around',}}>
                <FavoriteIcon style={{color: 'white'}}/> <RemoveRedEyeIcon  style={{color: 'white'}} /> <InsertCommentIcon  style={{color: 'white'}} /> <BookmarkIcon  style={{color: 'white'}} />
            </div>
        </div>

        <div style={{margin: '0 2rem 1rem 2rem', padding: '.5rem', background: '#4c4cca94', borderRadius: '1rem'}}>
            <div>
            <h1 style={{marginBottom: '-.5rem'}}>Introduction to Javascript</h1>
            <p style={{color: '#6a6adc', fontSize: '1rem', marginBottom: '-.1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, neque, corporis sit, similique distinctio omnis vel aperiam blanditiis voluptatem facilis sed aliquam nemo molestias earum nihil repellat eius rerum explicabo!</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around',}}>
                <FavoriteIcon style={{color: 'white'}}/> <RemoveRedEyeIcon  style={{color: 'white'}} /> <InsertCommentIcon  style={{color: 'white'}} /> <BookmarkIcon  style={{color: 'white'}} />
            </div>
        </div>
        
        </div>
    )
}

export default Profile