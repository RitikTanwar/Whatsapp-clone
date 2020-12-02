import React from 'react'
import './Chat.css'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__heading">
                <Avatar />
                <div className="chat__headingInfo">
                    <h2>Name</h2>
                    <p>Last seen at .... Time</p>
                </div>
                <div className="chat__headingRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Ritik</span>
                        This is message
                        <span className="timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__input">
                <IconButton>
                    <EmojiEmotionsIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <form >
                    <input type="text" placeholder="Type a message" className="input__box" />
                    <IconButton>
                        <SendIcon />
                    </IconButton>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
