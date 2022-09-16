import './sidebarMenu.css';


const SidebarMenu = ({text , Icon , active}) => {
    return(
        <div className={`sidebarMenu ${active && "sidebarmenu--active"}`}>
            <i className={Icon} aria-hidden="true"></i>
             <p>{text}</p>
        </div>
    )
}

export default SidebarMenu;