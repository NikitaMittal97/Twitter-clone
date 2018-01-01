import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CardHeader from 'material-ui/Card/CardHeader'
import Chip from 'material-ui/Chip';
import Group from 'material-ui/svg-icons/social/people-outline';

function handleClick() {
    alert('Following');
  }

const lblStyle = { 
  fontFamily: "comic sans ms", 
  fontWeight: "bold" }

const titleStyle= { 
  fontFamily: "arial", 
  fontWeight: "bold"}

const chipStyle= {
  marginTop: "4px", 
  backgroundColor:"white",
  borderColor: '#00BCD4',
  borderWidth: "2px",
  borderStyle: "solid"
}

const divStyle= {
    marginTop: 20,
    width: 325,
    marginLeft: 90,
    backgroundColor: "white",
}

export default class SearchFollow extends React.Component {
  
  render() {
    return (
  
  <div className="follow" 
       style={divStyle}>
    <List>
      <div>
      <h2 style={{display:"inline", marginLeft:"10px"}}> Who to follow</h2>
      <p style={{display:"inline", fontSize: "14px", color:"#00BCD4"}}>. Refresh. View all</p>
      </div>
      <CardHeader
          title="Malini Shah"
          subtitle={
            <Chip
            onClick={handleClick}
            style={chipStyle}
            labelColor='#00BCD4'
            labelStyle={lblStyle}
            hoverColor='black'
            >
             Follow
            </Chip>
          }
          titleStyle={titleStyle}
          subtitleStyle={{width: "65px"}}
          avatar="https://cdn2.iconfinder.com/data/icons/person-gender-hairstyle-clothes-variations/48/Female-Side-comb-O-neck-512.png"
        />
        <hr color="#EEEEEE"/>
      <CardHeader
        title="Sonali Grover"
        subtitle={<Chip
          onClick={handleClick}
          style={chipStyle}
          labelColor='#00BCD4'
          labelStyle={lblStyle}
        >
          Follow
        </Chip>}
        titleStyle={titleStyle}
        subtitleStyle={{width: "65px"}}
        avatar="https://cdn0.iconfinder.com/data/icons/human-resources-and-strategy/80/Human_resource_strategy-01-512.png"
      />
      <hr color="#EEEEEE"/>
     <CardHeader
      title="Siddharth Goswami"
      subtitle={<Chip
        onClick={handleClick}
        style={chipStyle}
        labelColor='#00BCD4'
        labelStyle={lblStyle}
      >
        Follow
      </Chip>}
      titleStyle={titleStyle}
      subtitleStyle={{width: "65px"}}
      avatar="http://164.100.150.10/gyanjyoti/Img/boy.png"
    />
    <hr color="#EEEEEE"/> 
    <div style={{marginLeft:"10px", display:"inline"}}>
    <Group style={{display: "inline", marginLeft:"20px", color:"#00BCD4",}}/>
    <p style={{fontSize:"13px",  
               display:"inline",
               color: "#00BCD4",
               marginLeft: 10}}>Find people you know</p>
    </div>
    </List>
  </div>
      );
    };
  };
