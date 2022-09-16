import "./sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarMenu from "../sidebarMenu/sidebarMenu.jsx";
import { Button } from "@mui/material";


const Sidebar = () => {
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
           <SidebarMenu active Icon="fa fa-home" text="Home"/>
           <SidebarMenu Icon="fa fa-user-o" text="Profile"/>
           <SidebarMenu Icon="fa fa-search" text="Explore"/>
           <SidebarMenu Icon="fa fa-bell-o" text="Notifications"/>
           <SidebarMenu Icon="fa fa-envelope-o" text="Messages"/>
           <SidebarMenu Icon="fa fa-bookmark-o" text="Bookmarks"/>
           <SidebarMenu Icon="fa fa-shopping-cart" text="Purchases"/>
           <SidebarMenu Icon="fa fa-ellipsis-h" text="More"/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}


export default Sidebar;