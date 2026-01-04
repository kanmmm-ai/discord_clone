import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* sidebar left */}
        <div className='sidebarLeft'>
        <div className='discordIcon'>
            <img src="./discord_icon.png" alt="logo" />
        </div>
        <div className='serverIcon'>
            <img src="./logo192.png" alt="logo" />
        </div>
        </div>

        {/* sidebar right */}
        <div className='sidebarRight'>
            <div className="sidebarTop">
                <h3>Discord</h3>
                <ExpandMoreIcon />
            </div>
            <div className='sidebarChannels'>
                <div className='sidebarChannelsHeader'>
                    <div className='channelHeader'>
                        <ExpandMoreIcon />
                        <h3>プログラミングチャンネル</h3>
                    </div>
                    <AddIcon className='sidebarAdd'/>
                </div>

                <div className='sidebarChannelList'>
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className='sidebarFooter'>
                <div className='sidebarAccount'>
                    <img src="./icon.png" alt="logo" />
                    <div className='accountName'>
                        <h4>marige_</h4>
                        <span>#3424</span>
                    </div>
                </div>
                <div className='sidebarVoice'>
                    <KeyboardVoiceIcon/>
                    <HeadphonesIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>

    </div>
  )
}
