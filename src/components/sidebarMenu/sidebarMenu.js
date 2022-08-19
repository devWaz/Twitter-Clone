import './sidebarMenu.css';



const SidebarMenu = ({text , Icon}) => {
    return(
        <div className="sidebarMenu">
            {/* <Icon/> */}
             <p>{text}</p>
        </div>

    )
}

export default SidebarMenu;