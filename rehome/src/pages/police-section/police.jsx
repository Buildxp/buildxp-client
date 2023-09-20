import React from 'react'
import './police.scss'
import Logo from './asset/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function police() {
  return (
    <div id="police">
      <div className='left'>
        <div className='leftbar'>
          <img src={Logo}></img>

          <list className="navitems">
            <div className="data1">
              <li className='item1'><HomeIcon /></li>
              <span className='data'>Home</span>
            </div>
            <div className="data1">
              <li className='item1'><NotificationsActiveIcon /></li>
              <span className='data'>Notification</span>
            </div>
            <div className="data1">
              <li className='item1'><BarChartOutlinedIcon /></li>
              <span className='data'>Statistics</span>
            </div>
            <div className="data1">
              <li className='item1'><SettingsIcon /></li>
              <span className='data'>Setting</span>
            </div>
          </list>

          <div className="bottom">
            <div className="last">
              <li className='lastitem'><InfoOutlinedIcon /></li>
              <span className='lastdata'> Help & Information </span>
            </div>
            <div className="last1">
              <li className='lastitem'><LogoutOutlinedIcon /></li>
              <span className='lastdata'>Logout</span>
            </div>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='righttopsearch'>
          <h1>Track Ticket Number</h1>
          <div className='searchbox'>
            <input type='text' placeholder='Ticket Number'></input>
            <button type='sumbit'>Search</button>
          </div>
          

        </div>
        <div className='rightgraph'></div>

        <div className="rightdown">

          <div className='imageupload'></div>
          <div className='notification'></div>

        </div>
      </div>
    </div>
  )
}
