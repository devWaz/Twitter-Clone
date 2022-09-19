import "./sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarMenu from "../sidebarMenu/sidebarMenu.jsx";
import { Button } from "@mui/material";


const Sidebar = () => {
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
           <SidebarMenu active Icon="bi bi-house-heart-fill" text="Home"/>
           <SidebarMenu Icon="bi bi-person" text="Profile"/>
           <SidebarMenu Icon="bi bi-search" text="Explore"/>
           <SidebarMenu Icon="bi bi-bell" text="Notifications"/>
           <SidebarMenu Icon="fa fa-envelope-o" text="Messages"/>
           <SidebarMenu Icon="fa fa-bookmark-o" text="Bookmarks"/>
           <SidebarMenu Icon="fa fa-ellipsis-h" text="More"/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}


export default Sidebar;