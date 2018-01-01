import React from 'react';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Divider from 'material-ui/Divider/Divider';


const divStyle={
    marginTop: 20
}

const cardStyle={
  marginTop: 10,
}

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'What\'s happening?'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
        return (
        <div style={{backgroundColor: '#B2EBF2',
                     marginTop: 20,
                     paddingBottom: 10,
                     paddingTop: 10,
                     }}> 
          <form>
            <label>
            <div style={{position: "relative",
                         height: 40,
                         width: 490
                         }}>
              <img src="https://image.flaticon.com/icons/svg/61/61205.svg"
                   style={{width: 30, 
                           height: 30,
                           paddingLeft: 10,
                           display: "inline",
                           position: "absolute",
                           top: 5,
                           float: 'left',
                        }}/>
              <input type="text" 
                     value={this.state.value} 
                     onChange={this.handleChange}
                     style={{paddingBottom: 20,
                            width: "87%",
                            borderWidth: 1,
                            borderColor: 'blue',
                            borderRadius: 10,
                            backgroundImage: 'url(http://simpleicon.com/wp-content/uploads/picture.svg)',
                            backgroundPosition: "95%",
                            backgroundSize: 18,
                            backgroundRepeat: "no-repeat",
                            display: 'inline',
                            float: 'right',
                            paddingRight: 5
                         }} />
            </div>
            </label>
          </form>
        </div>
        );
      }
    }

const Tweets = () => (
 <div>
 
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
      Went to the most beautiful place. Look at the snow... isn't it adorable.
      Pristine beauty. Just can't forget those mesmerising moments.
    </CardText>
    <CardMedia>
      <img src="http://files.all-free-download.com//downloadfiles/wallpapers/1680_1050/snow_wallpaper_winter_nature_1436.jpg" alt="" />
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
      title="Hari Reddy"
      subtitle="@hari.reddy"
      avatar="https://c.s-microsoft.com/en-in/CMSImages/account-OverviewPage_Avatar_325x300.png?version=0576ade4-37c4-ea6d-b7bd-5408b658eb29"
      actAsExpander={true}>
      <IconMenu
      iconButtonElement={<IconButton><More /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      iconStyle={{position:"relative", left: 200, top: -15}}
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
    'Tis the season to wish one another joy and love and peace. These are my wishes for you, 
    Merry Christmas our dear friends, may you feel the love this special day. 
    May this festive season sparkle and shine, may all of your wishes and dreams come true, 
    and may you feel this happiness all year round. 
    Merry Christmas!
    </CardText>
    <CardMedia>
      <img src="http://i.123g.us/c/edec_c_newjingle/card/320187.jpg" alt="" />
    </CardMedia>
    <CardActions>
      <FlatButton label="900"
                  icon={<FontAwesome name="comment-o" />}
                  hoverColor="white" />
      <FlatButton label="19"
                  icon={<FontAwesome name="retweet" />}
                  hoverColor="white" />
      <FlatButton label="1k"
                  icon={<FontAwesome name="heart-o" />}
                  hoverColor="white" />
      <FlatButton label="3"
                  icon={<FontAwesome name="envelope" />}
                  hoverColor="white" />
    </CardActions>
  </Card>

  <Card style={cardStyle}
        zDepth={0}>
    <CardHeader
      title="Seema Mohanraj"
      subtitle="@seemaMohan"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdN9bXjLjhw4T3awfMiD2Fsaw9WEiA0adSlucbxULTequ4X-j"
      actAsExpander={true}>
    <IconMenu
      iconButtonElement={<IconButton><More /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      iconStyle={{position:"relative", left: 180, top: -15}}
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
    Always wanted to paint walls...what better an opportunity?! Had a 
    great time repainting the slums with beautiful colours representing just 
    how colourful the lives of the people within are. 
    <div style={{color: "#00BCD4"}}>#MakingMumbaiBetter #ChalRangDe #chalrangdemumbai
    </div> 
    </CardText>
    <CardMedia>
      <img src="http://s3.india.com/wp-content/uploads/2017/12/chal-rang-de.jpg" alt="" />
    </CardMedia>
    <CardActions>
      <FlatButton label="1k"
                  icon={<FontAwesome name="comment-o" />}
                  hoverColor="white" />
      <FlatButton label="20"
                  icon={<FontAwesome name="retweet" />}
                  hoverColor="white" />
      <FlatButton label="3k"
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
      title="Narendra Modi"
      subtitle="@narendramodi"
      avatar="https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg"
      actAsExpander={true}>
    <IconMenu
      iconButtonElement={<IconButton><More /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      iconStyle={{position:"relative", left: 180, top: -15}}
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
    Congratulations <span style={{color: "#00BCD4"}}>@vishy64theking!</span> You've proven your mettle time and again. Your tenacity inspires us. 
    India is proud of your exemplary success at the World Rapid Chess Championship!
    </CardText>
    <CardActions>
      <FlatButton label="7k"
                  icon={<FontAwesome name="comment-o" />}
                  hoverColor="white" />
      <FlatButton label="5k"
                  icon={<FontAwesome name="retweet" />}
                  hoverColor="white" />
      <FlatButton label="10k"
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
      title="Dogs day out"
      subtitle="@Dogiees"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xupm0V48Ni-T7cG_i2soND0U89kwnlF9EVPETmdPeQOxJ3On"
      actAsExpander={true}>
    <IconMenu
      iconButtonElement={<IconButton><More /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      iconStyle={{position:"relative", left: 195, top: -15}}
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
      Now who says a cute little puppy cannot make your day?!
    </CardText>
    <CardMedia>
      <img src="https://cdn.shopify.com/s/files/1/1267/6891/collections/patches_1_6f03242d-0ab9-4f11-88d1-1a65bcc6e022_large.jpg?v=1505411720 " alt="" />
    </CardMedia>
    <CardActions>
      <FlatButton label="2k"
                  icon={<FontAwesome name="comment-o" />}
                  hoverColor="white" />
      <FlatButton label="1k"
                  icon={<FontAwesome name="retweet" />}
                  hoverColor="white" />
      <FlatButton label="12k"
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
      title="Barack Obama"
      subtitle="@BarackObama"
      avatar="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg"
      actAsExpander={true}>
    <IconMenu
      iconButtonElement={<IconButton><More /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      iconStyle={{position:"relative", left: 180, top: -15}}
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
    As we count down to the new year, we get to reflect and prepare for what’s ahead. 
    For all the bad news that seemed to dominate our collective consciousness, there 
    are countless stories from this year that remind us what's best about America.
    </CardText>
    <CardActions>
      <FlatButton label="70k"
                  icon={<FontAwesome name="comment-o" />}
                  hoverColor="white" />
      <FlatButton label="90k"
                  icon={<FontAwesome name="retweet" />}
                  hoverColor="white" />
      <FlatButton label="507k"
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
      title="Barack Obama"
      subtitle="@BarackObama"
      avatar="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg"
      actAsExpander={true}>
    <IconMenu
      iconButtonElement={<IconButton><More /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      iconStyle={{position:"relative", left: 180, top: -15}}
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
    All across America people chose to get involved, get engaged and stand up. Each 
    of us can make a difference, and all of us ought to try. 
    So go keep changing the world in 2018.
    </CardText>
    <CardActions>
      <FlatButton label="90k"
                  icon={<FontAwesome name="comment-o" />}
                  hoverColor="white" />
      <FlatButton label="100k"
                  icon={<FontAwesome name="retweet" />}
                  hoverColor="white" />
      <FlatButton label="508k"
                  icon={<FontAwesome name="heart-o" />}
                  hoverColor="white" />
      <FlatButton
                  icon={<FontAwesome name="envelope" />}
                  hoverColor="white" />
    </CardActions>
  </Card>
     
 </div>
);

export default class Contents extends React.Component{
    render() {
        return (
            <div style={{marginRight: 20, marginLeft: 20}}>
            <NameForm />
            <Tweets />
            </div>
        )
    }
}