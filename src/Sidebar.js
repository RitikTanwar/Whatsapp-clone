import React from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerLeft">
                    <IconButton>
                        <Avatar src="https://instagram.fdel9-1.fna.fbcdn.net/v/t51.2885-19/s320x320/91179376_509741543044926_1158705313726070784_n.jpg?_nc_ht=instagram.fdel9-1.fna.fbcdn.net&_nc_ohc=jPyKX0xdBDAAX_oGjt2&tp=1&oh=422b4bc589b7caadbabf7566cbe40fe9&oe=5FF1E5F8" />
                    </IconButton>
                </div>
                <div className="sidebar__headerRight">
                    <IconButton >
                        <DataUsageIcon />
                    </IconButton>
                    <IconButton >
                        <ChatIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__searchbar">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search or Start a new chat" className="search__input" />
                </div>
            </div>
            <div className="sidebar__body">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
