import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CardHeader from 'material-ui/Card/CardHeader'
import Chip from 'material-ui/Chip';
import Group from 'material-ui/svg-icons/social/people-outline'
import Moments from 'material-ui/svg-icons/content/weekend'

function handleClick() {
    alert('Following');
  }

const lblStyle = { fontFamily: "comic sans ms", fontWeight: "bold" }
const titleStyle={ fontFamily: "arial", fontWeight: "bold"}

const SubheaderRight = () => (
  <div style={{width: "260px",
               marginRight: "100px",
               marginTop: "20px",
               backgroundColor: 'white'}}>
    <List>
      <div>
      <h3 style={{display:"inline", marginLeft:"10px"}}> Who to follow</h3>
      <p style={{display:"inline", fontSize: "15px", color:"#00BCD4"}}>. Refresh. View all</p>
      </div>
      <CardHeader
          title="Eric Hoffman"
          subtitle={<Chip
            onClick={handleClick}
            style={{marginTop: "4px", 
                    backgroundColor:"white",
                    borderColor: '#00BCD4',
                    borderWidth: "2px",
                    borderStyle: "solid"}}
            labelColor='#00BCD4'
            labelStyle={lblStyle}
          >
            Follow
          </Chip>}
          titleStyle={titleStyle}
          subtitleStyle={{width: "65px"}}
          avatar="https://static.pexels.com/photos/160699/girl-dandelion-yellow-flowers-160699.jpeg"
        />
        <hr color="#EEEEEE"/>
      <CardHeader
        title="Grace Ng"
        subtitle={<Chip
          onClick={handleClick}
          style={{marginTop: "4px", 
          backgroundColor:"white",
          borderColor: '#00BCD4',
          borderWidth: "2px",
          borderStyle: "solid"}}
          labelColor='#00BCD4'
          labelStyle={lblStyle}
        >
          Follow
        </Chip>}
        titleStyle={titleStyle}
        subtitleStyle={{width: "65px"}}
        avatar="images/uxceo-128.jpg"
      />
      <hr color="#EEEEEE"/>
     <CardHeader
      title="Raquel Parrado"
      subtitle={<Chip
        onClick={handleClick}
        style={{marginTop: "4px", 
        backgroundColor:"white",
        borderColor: '#00BCD4',
        borderWidth: "2px",
        borderStyle: "solid"}}
        labelColor='#00BCD4'
        labelStyle={lblStyle}
      >
        Follow
      </Chip>}
      titleStyle={titleStyle}
      subtitleStyle={{width: "65px"}}
      avatar="images/raquelromanp-128.jpg"
    />
    <hr color="#EEEEEE"/>
    <Group style={{display: "inline", marginLeft:"20px", color:"#00BCD4"}}/>
    <div style={{marginLeft:"10px", display:"inline"}}>
    <p style={{fontSize:"15px",  display:"inline"}}>Find people you may know</p>
    </div>
    </List>
  </div>
  );

export default SubheaderRight;