import React from 'react';
import Launch from 'material-ui/svg-icons/action/launch';
import IconButton from 'material-ui/IconButton';

const divStyle={
    background: 'white',
    width: "285px",
    marginRight: "100px",
    marginTop: "20px",
};

const pStyle={
    color: 'darkgrey',
    fontSize: 13,
    paddingTop: 18,
    paddingRight:18,
    paddingLeft:18,
}

const Copyright = () => (
    <div style={divStyle}>
      <p style={pStyle} className="nav">
         

    <div><span>© 2017 Twitter</span>
    <span style={{marginLeft:5}}><a>About</a></span>
    <span style={{marginLeft:5,}}><a>Help Center</a></span>
    <span style={{marginLeft:5}}><a>Terms</a></span></div>
    <div><span style={{marginLeft:5}}><a>Privacy policy</a></span>
    <span style={{marginLeft:5}}><a>Cookies</a></span>
    <span style={{marginLeft:5}}><a>Ads info</a></span>
    <span style={{marginLeft:5}}><a>Brand</a></span></div>
    <div><span style={{marginLeft:5}}><a>Blog</a></span>
    <span style={{marginLeft:5}}><a>Status</a></span>
    <span style={{marginLeft:5}}><a>Apps</a></span>
    <span style={{marginLeft:5}}><a>Jobs</a></span>
    <span style={{marginLeft:5}}><a>Marketing</a></span></div>
    <div><span style={{marginLeft:5}}><a>Businesses</a></span>
    <span style={{marginLeft:5}}><a>Developers</a></span></div>



  
      </p>
      <hr color="#EEEEEE" />
      
      <IconButton tooltip="Advertise with Twitter"
                  tooltipPosition='top-center'
                  tooltipStyles={{fontSize: 12}}
                  iconStyle={{color: '#00BCD4', 
                              width: 17, 
                              height: 17, 
                              paddingLeft: 10}}
                  style={{display: "inline"}}>
      <Launch />
      </IconButton>
      <p style={{display: "inline", 
                 color: '#00BCD4', 
                 fontSize: 13}}>
         Advertise with Twitter
      </p>

    </div>

);

export default Copyright;