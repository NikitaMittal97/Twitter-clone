import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar'
import Home from 'material-ui/svg-icons/action/home'
import Message from 'material-ui/svg-icons/content/mail'
import Bell from 'material-ui/svg-icons/social/notifications'
import FlatButton from 'material-ui/FlatButton'

const iconStyle = {
    marginRight : "35px"
}
const tabStyle = {
    marginLeft : 90
}

const TabsIconText = () => (
  <Tabs 
  tabItemContainerStyle={{width: '400px'}}
  style={{background: 'blue',
          marginLeft : 90,}}
  contentContainerStyle={{background: '#FFF'}}
  inkBarStyle={{background: 'white'}}>
    <Tab
    label="Home"
    icon={<Home />}
    />
    <Tab
      icon={<Message />}
      label="Message"
    />
    <Tab
      icon={<Bell />}
      label="Notification"
    />
  </Tabs>
);

const AppBarLeft = () => (
    <AppBar
    iconElementLeft={<TabsIconText/>}
    />
)

export default AppBarLeft;