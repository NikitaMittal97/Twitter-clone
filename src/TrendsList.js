import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const divStyle={
    width: 300,
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
  constructor() {
    super();
    this.state = { color: "black"};
    this.onMouseover=this.onMouseover.bind(this);
    this.onMouseout=this.onMouseout.bind(this);
  }

  onMouseover(e) {
    this.setState({color: "blue"})
  }

  onMouseout(e) {
    this.setState({color: "black"})
  }

  render() {
    const {color} = this.state
    return (
    <div style={divStyle}>
      <List>
        <Subheader style={subheaderStyle}>Trends for you</Subheader>
        
        <ListItem
          primaryText="#ChristmasEve"
          secondaryText="226K Tweets"
          hoverColor="white"
          onMouseEnter={this.onMouseover}
          onMouseLeave={this.onMouseout} >
          </ListItem>
        <ListItem
          primaryText="#RKNagarElectionResult"
          secondaryText="48.7K Tweets"
          hoverColor="white"
        />
        <ListItem
          primaryText="#MohammedRafi"
          secondaryText="9K Tweets"
          hoverColor="white"
        />
        <ListItem
          primaryText="#JaiRamThakur"
          secondaryText="9,768 Tweets"
          hoverColor="white"
        />
        <ListItem
          primaryText="#AIADMK"
          secondaryText="2,435 Tweets"
          hoverColor="white"
        />
        <ListItem
          primaryText="TTV Dhinakaran"
          secondaryText="276K Tweets"
          hoverColor="white"
        />
      </List>
    </div>
    )
  }
}

