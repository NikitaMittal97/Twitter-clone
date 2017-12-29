import React from 'react';
import Home from 'material-ui/svg-icons/action/home';
import Message from 'material-ui/svg-icons/content/mail';
import Bell from 'material-ui/svg-icons/social/notifications';
import FlatButton from 'material-ui/FlatButton';
import Moments from 'material-ui/svg-icons/hardware/toys';
import FontAwesome from 'react-fontawesome';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import Divider from 'material-ui/Divider';
import Analytic from 'material-ui/svg-icons/av/equalizer';
import Profile from 'material-ui/svg-icons/social/person';
import Search from 'material-ui/svg-icons/action/search';
import Subject from 'material-ui/svg-icons/action/subject';
import Launch from 'material-ui/svg-icons/action/launch';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';


const iconStyle = {
    marginRight : "35px"
}


export default class ToolBar extends React.Component {

  render() {
    return(
  <div style={{zIndex:100,}}>
  <Toolbar style={{position: 'fixed', 
                   backgroundColor: 'white', 
                   zIndex:100,
                   width:1500}}>
  <div>
  <ToolbarGroup firstChild={true}>
  <FlatButton
  label="Home"
  icon={<Home />}
  primary={true}
  labelStyle={{textTransform: "none"}}
  style={{marginLeft: 90, marginRight: 0}}
  hoverColor= "white"
/>
<FlatButton
label="Moments"
icon={<Moments />}
labelStyle={{textTransform: "none"}}
style={{marginRight: 0, color: "grey"}}
hoverColor= "white"
/>
<FlatButton
label="Message"
icon={<Message />}
labelStyle={{textTransform: "none"}}
style={{marginRight: 0, color: "grey"}}
hoverColor= "white"
/>
<FlatButton
label="Notification"
icon={<Bell />}
labelStyle={{textTransform: "none", }}
style={{marginRight: 0, color: "grey"}}
hoverColor= "white"
/>
  <div>
  <FontAwesome name='twitter' 
               size='2x' 
               style={{color: '#00BCD4', 
                       position: 'fixed',
                       left: 700,
                      top:10}} />
  </div>
  <div>
  <Chip style={{width: 200, 
                height: 40,
                position:'fixed',
                left: 850,
                top: 10,
                backgroundColor: '#F5F5F5',
              }}>
    <TextField hintText="Search Twitter" 
               style={{width: 150, 
                       height: 40,}}/>
    <Search />
  </Chip>
  </div>
<IconMenu
iconButtonElement={<IconButton><AccountIcon/></IconButton>}
anchorOrigin={{horizontal: 'left', vertical: 'top'}}
targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
iconStyle={{height:45, width:45, color: 'black'}}
style={{position: 'fixed', left: 1070, zIndex:100}}
>
<ListItem primaryText= "Nikita Mittal"
          secondaryText="@nikitamittal97" />
<Divider />
<MenuItem primaryText="Profile"
          leftIcon={<Profile />} />
<MenuItem primaryText="Lists"
          leftIcon={<Subject />} />
<MenuItem primaryText="Moments"
          leftIcon={<Moments />} />
<Divider />
<MenuItem primaryText="Twitter Ads" 
          leftIcon={<Launch />}/>
<MenuItem primaryText="Analytics"
          leftIcon={<Analytic />} />
<Divider />
<MenuItem primaryText="Settings and privacy" />
<MenuItem primaryText="Help Center" />
<MenuItem primaryText="Keyboard shortcuts" />
<MenuItem primaryText="Log out" />
<MenuItem primaryText="Night mode"
          rightIcon= {<FontAwesome name="moon-o" />} />
</IconMenu>
<div>
<Chip style={{backgroundColor: '#00BCD4',
              position:'fixed',
              left:1155,
              top:15,
            }}>
    <h4 style={{color:'white',
                marginBottom: 0,
                marginTop: 0,
                marginRight: 10,
                marginLeft: 10}}>
    Tweet
    </h4>
</Chip>
</div>
  </ToolbarGroup>
  </div>
  </Toolbar>
</div>
    );
  };
};

