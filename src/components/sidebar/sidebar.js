import "./sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarMenu from "../sidebarMenu/sidebarMenu.js";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';



const Sidebar = () => {
    return(
        <div className="sidebar">
            <TwitterIcon/>
           <SidebarMenu Icon={HomeIcon} text="Home"/>
           <SidebarMenu Icon={SearchIcon} text="Explore"/>
           <SidebarMenu text="Notifications"/>
           <SidebarMenu text="Messages"/>
           <SidebarMenu text="Bookmarks"/>
           <SidebarMenu text="Lists"/>
           <SidebarMenu text="Profile"/>
           <SidebarMenu text="More"/>
        </div>
    )
}


export default Sidebar;