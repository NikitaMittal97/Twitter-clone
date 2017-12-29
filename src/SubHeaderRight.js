import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CardHeader from 'material-ui/Card/CardHeader'
import Chip from 'material-ui/Chip';
import Group from 'material-ui/svg-icons/social/people-outline';
import Moments from 'material-ui/svg-icons/content/weekend';
import FlatButton from 'material-ui/FlatButton';

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

export default class SubheaderRight extends React.Component {
  
  render() {
    return (
  
  <div style={{width: "285px",
               marginRight: "100px",
               marginTop: "20px",
               backgroundColor: 'white'}}>
    <List>
      <div>
      <h3 style={{display:"inline", marginLeft:"10px"}}> Who to follow</h3>
      <p style={{display:"inline", fontSize: "13px", color:"#00BCD4"}}>. Refresh. View all</p>
      </div>
      <CardHeader
          title="Eric Hoffman"
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
          avatar="http://ilsmonline.org/wp-content/uploads/2017/01/EricHoffman-squashed.jpg"
        />
        <hr color="#EEEEEE"/>
      <CardHeader
        title="Grace Ng"
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
        avatar="https://pbs.twimg.com/profile_images/714704731755700224/nrdyK6wt.jpg"
      />
      <hr color="#EEEEEE"/>
     <CardHeader
      title="Raquel Parrado"
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
      avatar="https://i1.rgstatic.net/ii/profile.image/AS%3A502918040489984%401496916412050_xl/Raquel_Prado3.png"
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

