import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Copyright from './Copyright';
import Divider from 'material-ui/Divider/Divider';

const divStyle={
    width: 325,
    marginLeft: 90,
    marginTop: 20,
    backgroundColor: 'white',
    
}

const subheaderStyle= {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
}

const hoverStyle= {
  color:"#00BCD4",
  textDecoration: "underline"
}

const pStyle={
  color: 'grey',
  fontSize: 13,
  paddingTop: 18,
  paddingRight: 18,
  paddingLeft: 18,
  marginLeft: 90
}

export default class SPTrends extends React.Component {
 
  render() {
    return (
   <div>
    <div className="trends" style={divStyle}>
      <List>
        <Subheader style={subheaderStyle}>Trends for you</Subheader>
        
        <ListItem
          primaryText="#Bringbackmediacrooks"
          secondaryText="2,472 Tweets"
          hoverColor="white"
          style={{color: '#00BCD4', fontWeight: "bold"}}
        />
        <ListItem
          primaryText="#PUNNEU"
          secondaryText="1,330 Tweets"
          hoverColor="white"
          style={{color: '#00BCD4', fontWeight: "bold"}}
        />
        <ListItem
          primaryText="#Padmavat"
          secondaryText="11.1K Tweets"
          hoverColor="white"
          style={{color: '#00BCD4', fontWeight: "bold"}}
        />
        <ListItem
          primaryText="Shilpa Shinde"
          secondaryText="119k Tweets"
          hoverColor="white"
          style={{color: '#00BCD4', fontWeight: "bold"}}
        />
        <ListItem
          primaryText="#MUNSOU"
          secondaryText="19.3k Tweets"
          hoverColor="white"
          style={{color: '#00BCD4', fontWeight: "bold"}}
        />
        <ListItem
          primaryText="Nitin Patel"
          secondaryText="26K Tweets"
          hoverColor="white"
          style={{color: '#00BCD4', fontWeight: "bold"}}
        />
      </List>
    </div>

    <p style={pStyle} className="nav">
    <div><span>© 2017 Twitter</span>
    <span style={{marginLeft:10}}><a>About</a></span>
    <span style={{marginLeft:10,}}><a>Help Center</a></span>
    <span style={{marginLeft:10}}><a>Terms</a></span></div>
    <div><span style={{marginLeft:10}}><a>Privacy policy</a></span>
    <span style={{marginLeft:10}}><a>Cookies</a></span>
    <span style={{marginLeft:10}}><a>Ads info</a></span></div>
    </p>

   </div>
    )
  }
}

