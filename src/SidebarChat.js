import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebar__ChatInfo">
                <h2>Name</h2>
                <p>This is the Last message from this chat</p>
            </div>
        </div>
    )
}

export default SidebarChat
