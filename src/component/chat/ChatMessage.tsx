import React from 'react'
import { Avatar } from '@mui/material';
import './ChatMessage.scss'

function ChatMessage() {
  return (
    <div className='message'>
        <Avatar />
        <div className='messageInfo'>
            <h4>marige_
                <span className='messageTimestamp'>2026/12/24 12:12:12</span>
            </h4>
            
            <p>メッセージ本文</p>
        </div>
    </div>
  )
}

export default ChatMessage