import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Divider from 'material-ui/Divider/Divider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const cardStyle={
    marginTop: 10,
    width: 490,
}

const divStyle={
  marginTop: 70,
  marginLeft: 10
}

const profileStyle={
  width: 280,
  height: 300,
  backgroundColor: "white",
}

const timelineStyle={
  height: 100,
  width: 280
}

const avatarStyle={
  height: 75,
  width: 75,
  position: "relative",
  top: -30,
}

const chipStyle= {
  marginTop: "4px", 
  backgroundColor:"white",
  borderColor: '#00BCD4',
  borderWidth: "2px",
  borderStyle: "solid",
  width: 70,
  position: "relative",
  top: -80,
  left: 150,
}

const lblStyle = { 
  fontFamily: "comic sans ms", 
  fontWeight: "bold" 
}

const iconStyle ={
  position: "relative",
  top: -120,
  left: 230
}

const cardHeaderStyle={
  position: "relative",
  top: -130,

}

const pStyle={
  position: "relative",
  top: -140,
  marginLeft: 20,
  marginRight: 20,
  fontSize: 15
}

const SPContents = () => (
    <div style={divStyle}>

     <h3>People</h3>
     <div style={profileStyle}>
      <div>
        <img src="http://www.aadhaarnews.com/wp-content/uploads/2015/08/e-aadhaar-700x445.jpg" 
             style={timelineStyle}/>
      </div>
      <div>
        <Avatar src="https://img.etimg.com/thumb/msid-61243899,width-300,resizemode-4/how-to-check-if-your-bank-account-is-linked-with-aadhaar.jpg"
                style={avatarStyle} />
        <Chip
          style={chipStyle}
          labelColor='#00BCD4'
          labelStyle={lblStyle}
        >
          Follow
        </Chip>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          iconStyle={iconStyle}
        >
            <MenuItem primaryText="Copy link to twitter" />
            <MenuItem primaryText="Embed Tweet" />
            <MenuItem primaryText="Mute @rahulpandey23" />
            <MenuItem primaryText="Block @rahulpandey23" />
            <MenuItem primaryText="Report Tweet" />
            <MenuItem primaryText="I dont't like this Tweet" />
            <Divider />
            <MenuItem primaryText="Add to new Moment" />
        </IconMenu>
      </div>
      <div>
        <CardHeader
           title="Aadhaar"
           subtitle="@UIDAI"
           style={cardHeaderStyle}
           titleStyle={{fontWeight: "bold",
                        fontSize: 20}} />
        <p style={pStyle}>
          Official Twitter account of the Unique Identification 
          Authority of India. RTs are not endorsements.
        </p>
      </div>
     </div>
    
     <Card style={cardStyle}
           zDepth={0}>
       <CardHeader
         title="Rahul Pandey"
         subtitle="@rahulpandey23"
         avatar="https://thenewboston.com/images/defaultProfileImage.png"
         actAsExpander={true}>
            <IconMenu
                iconButtonElement={<IconButton><More /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                iconStyle={{position:"relative", left: 165, top: -15}}
                clickCloseDelay="100"
                open={true}
            >
                    <MenuItem primaryText="Copy link to twitter" />
                    <MenuItem primaryText="Embed Tweet" />
                    <MenuItem primaryText="Mute @rahulpandey23" />
                    <MenuItem primaryText="Block @rahulpandey23" />
                    <MenuItem primaryText="Report Tweet" />
                    <MenuItem primaryText="I dont't like this Tweet" />
                    <Divider />
                    <MenuItem primaryText="Add to new Moment" />
            </IconMenu>
       </CardHeader>
       <CardText>
        Once the data goes online, say i am doing it, it exposes my private info - biometrics 
        to public with the rights i have. now since i my aadhaar is linked to everyother db, can i file
        a complaint to erase my UID and links to eradicate or reduce the damage ??
       </CardText>
       <CardActions>
         <FlatButton label="4"
                     icon={<FontAwesome name="comment-o" />}
                     hoverColor="white" />
         <FlatButton 
                     icon={<FontAwesome name="retweet" />}
                     hoverColor="white" />
         <FlatButton 
                     icon={<FontAwesome name="heart-o" />}
                     hoverColor="white" />
         <FlatButton
                     icon={<FontAwesome name="envelope" />}
                     hoverColor="white" />
       </CardActions>
     </Card>

     <Card style={cardStyle}
           zDepth={0}>
       <CardHeader
         title="Nupur Solanki"
         subtitle="@nupursolanki"
         avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdN9bXjLjhw4T3awfMiD2Fsaw9WEiA0adSlucbxULTequ4X-j"
         actAsExpander={true}>
            <IconMenu
                iconButtonElement={<IconButton><More /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                iconStyle={{position:"relative", left: 180, top: -15}}
                clickCloseDelay="100"
                open={true}
            >
                    <MenuItem primaryText="Copy link to twitter" />
                    <MenuItem primaryText="Embed Tweet" />
                    <MenuItem primaryText="Mute @rahulpandey23" />
                    <MenuItem primaryText="Block @rahulpandey23" />
                    <MenuItem primaryText="Report Tweet" />
                    <MenuItem primaryText="I dont't like this Tweet" />
                    <Divider />
                    <MenuItem primaryText="Add to new Moment" />
            </IconMenu>
       </CardHeader>
       <CardText>
       Data-Hungry Dystopia: Facebook Asks Users For Aadhar Names
       </CardText>
       <CardMedia>
         <img src="https://cdn.wccftech.com/wp-content/uploads/2017/12/aadhaar-facebook-verify-740x277.png" alt="" />
       </CardMedia>
       <CardActions>
         <FlatButton label="4k"
                     icon={<FontAwesome name="comment-o" />}
                     hoverColor="white" />
         <FlatButton label="1k"
                     icon={<FontAwesome name="retweet" />}
                     hoverColor="white" />
         <FlatButton label="7k"
                     icon={<FontAwesome name="heart-o" />}
                     hoverColor="white" />
         <FlatButton
                     icon={<FontAwesome name="envelope" />}
                     hoverColor="white" />
       </CardActions>
     </Card>

     <Card style={cardStyle}
           zDepth={0}>
       <CardHeader
         title="Ramesh Suri"
         subtitle="@rameshsuri"
         avatar="https://c.s-microsoft.com/en-in/CMSImages/account-OverviewPage_Avatar_325x300.png?version=0576ade4-37c4-ea6d-b7bd-5408b658eb29"
         actAsExpander={true}>
            <IconMenu
                iconButtonElement={<IconButton><More /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                iconStyle={{position:"relative", left: 180, top: -15}}
                clickCloseDelay="100"
                open={true}
            >
                    <MenuItem primaryText="Copy link to twitter" />
                    <MenuItem primaryText="Embed Tweet" />
                    <MenuItem primaryText="Mute @rameshsuri" />
                    <MenuItem primaryText="Block @rameshsuri" />
                    <MenuItem primaryText="Report Tweet" />
                    <MenuItem primaryText="I dont't like this Tweet" />
                    <Divider />
                    <MenuItem primaryText="Add to new Moment" />
            </IconMenu>
       </CardHeader>
       <CardText>
       2017 will be remembered for <span style={{color:"#00BCD4"}}>@UIDAI</span> too...<br/> 
       Too much noise made by <span style={{color:"#00BCD4"}}>@UIDAI</span> 
       </CardText>
       <CardMedia>
         <img src="http://www.india.com/wp-content/uploads/2017/10/Destroy-the-Aadhar-troll.jpg" alt="" />
       </CardMedia>
       <CardActions>
         <FlatButton label="30"
                     icon={<FontAwesome name="comment-o" />}
                     hoverColor="white" />
         <FlatButton label="1"
                     icon={<FontAwesome name="retweet" />}
                     hoverColor="white" />
         <FlatButton 
                     icon={<FontAwesome name="heart-o" />}
                     hoverColor="white" />
         <FlatButton
                     icon={<FontAwesome name="envelope" />}
                     hoverColor="white" />
       </CardActions>
     </Card>

     <Card style={cardStyle}
           zDepth={0}>
       <CardHeader
         title="Anand Mishra"
         subtitle="@anandmish"
         avatar="http://wallzoa.com/wp-content/uploads/2013/08/wallpapers-nature-animals.jpg"
         actAsExpander={true}>
            <IconMenu
                iconButtonElement={<IconButton><More /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                iconStyle={{position:"relative", left: 180, top: -15}}
                clickCloseDelay="100"
                open={true}
            >
                    <MenuItem primaryText="Copy link to twitter" />
                    <MenuItem primaryText="Embed Tweet" />
                    <MenuItem primaryText="Mute @anandmish" />
                    <MenuItem primaryText="Block @anandmish" />
                    <MenuItem primaryText="Report Tweet" />
                    <MenuItem primaryText="I dont't like this Tweet" />
                    <Divider />
                    <MenuItem primaryText="Add to new Moment" />
            </IconMenu>
       </CardHeader>
       <CardText>
       Immediate linking of all immovable property registration with AADHAAR 
       is crucial need to send a strong message across the country about your 
       sincerity to fight against corruption because still 77% black money 
       exist in form of immovable property!
       </CardText>
       <CardActions>
         <FlatButton 
                     icon={<FontAwesome name="comment-o" />}
                     hoverColor="white" />
         <FlatButton 
                     icon={<FontAwesome name="retweet" />}
                     hoverColor="white" />
         <FlatButton 
                     icon={<FontAwesome name="heart-o" />}
                     hoverColor="white" />
         <FlatButton
                     icon={<FontAwesome name="envelope" />}
                     hoverColor="white" />
       </CardActions>
     </Card>

     <Card style={cardStyle}
           zDepth={0}>
       <CardHeader
         title="Karishma Rao"
         subtitle="@karishmarao"
         avatar="https://thenewboston.com/images/defaultProfileImage.png"
         actAsExpander={true}>
            <IconMenu
                iconButtonElement={<IconButton><More /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                iconStyle={{position:"relative", left: 180, top: -15}}
                clickCloseDelay="100"
                open={true}
            >
                    <MenuItem primaryText="Copy link to twitter" />
                    <MenuItem primaryText="Embed Tweet" />
                    <MenuItem primaryText="Mute @karishmarao" />
                    <MenuItem primaryText="Block @karishmarao" />
                    <MenuItem primaryText="Report Tweet" />
                    <MenuItem primaryText="I dont't like this Tweet" />
                    <Divider />
                    <MenuItem primaryText="Add to new Moment" />
            </IconMenu>
       </CardHeader>
       <CardText>
       Hello friends See what 2018 brings for us, We will known by new names like 
       Mr/Ms 529347152684 Friend don't be surprised it's your Aadhaar 
       identity which will replace your name . 
       <div style={{color:"#00BCD4"}}>#linkAadhaar</div>
       </CardText>
       <CardActions>
         <FlatButton label="6"
                     icon={<FontAwesome name="comment-o" />}
                     hoverColor="white" />
         <FlatButton label="4"
                     icon={<FontAwesome name="retweet" />}
                     hoverColor="white" />
         <FlatButton label="10"
                     icon={<FontAwesome name="heart-o" />}
                     hoverColor="white" />
         <FlatButton
                     icon={<FontAwesome name="envelope" />}
                     hoverColor="white" />
       </CardActions>
     </Card>






    </div>
);

export default SPContents;