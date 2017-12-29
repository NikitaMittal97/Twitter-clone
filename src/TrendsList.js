import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const divStyle={
    width: 325,
    marginLeft: 90,
    marginTop: 150,
    backgroundColor: 'white',
    top:1000,
    
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

export default class TrendsList extends React.Component {
 
  render() {
    return (
    <div style={divStyle}>
      <List>
        <Subheader style={subheaderStyle}>Trends for you</Subheader>
        
        <ListItem
          primaryText="#ChristmasEve"
          secondaryText="226K Tweets"
          hoverColor="white"
          style={{color: '#00BCD4'}}
        />
        <ListItem
          primaryText="#RKNagarElectionResult"
          secondaryText="48.7K Tweets"
          hoverColor="white"
          style={{color: '#00BCD4'}}
        />
        <ListItem
          primaryText="#MohammedRafi"
          secondaryText="9K Tweets"
          hoverColor="white"
          style={{color: '#00BCD4'}}
        />
        <ListItem
          primaryText="#JaiRamThakur"
          secondaryText="9,768 Tweets"
          hoverColor="white"
          style={{color: '#00BCD4'}}
        />
        <ListItem
          primaryText="#AIADMK"
          secondaryText="2,435 Tweets"
          hoverColor="white"
          style={{color: '#00BCD4'}}
        />
        <ListItem
          primaryText="TTV Dhinakaran"
          secondaryText="276K Tweets"
          hoverColor="white"
          style={{color: '#00BCD4'}}
        />
      </List>
    </div>
    )
  }
}

