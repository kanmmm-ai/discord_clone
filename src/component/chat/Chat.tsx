import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import Face5Icon from '@mui/icons-material/Face5';
import ChatMessage from './ChatMessage';

export default function Chat() {
  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className='chatMessage'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form action="">
          <input type="text" placeholder='Udemyへメッセージを送信' />
          <button type='submit' className='chatInputButton'>送信</button>
        </form>
        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <Face5Icon />
        </div>
      </div>
    </div>
  )
}
