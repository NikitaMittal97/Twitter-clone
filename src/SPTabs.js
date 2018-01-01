import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';

const tbStyle = {
    background: "#00BCD4",
    position: "relative",
    top: 57,
};

const tabStyle = {
    backgroundColor: "black",
    position: "relative",
    top: 57,
   
};

const buttonStyle = {
    textTransform: 'none', 
    fontWeight: "bold",
    color: "grey"}

export default class SpTab extends React.Component{
    render() {
        return (
    <div>
     <div>
      <Toolbar style={tbStyle}>
        <ToolbarGroup>
          <h1 style={{color: "white",
                      marginLeft: 90}}>aadhaar</h1>
        </ToolbarGroup>
      </Toolbar>
     </div>
     <div>
      <Tabs style={tabStyle}
            inkBarStyle={{backgroundColor: "#00BCD4"}}
            tabItemContainerStyle={{backgroundColor: "white"}}>
        <Tab label='Top' 
             buttonStyle={buttonStyle}/>
        <Tab label='Latest'
             buttonStyle={buttonStyle}/>
        <Tab label='People'
             buttonStyle={buttonStyle} />
        <Tab label='Photos'
             buttonStyle={buttonStyle} />
        <Tab label='Videos'
            buttonStyle={buttonStyle} />
        <Tab label='News'
             buttonStyle={buttonStyle} />
        <Tab label='Broadcasts'
             buttonStyle={buttonStyle} />
      </Tabs>
     </div>
    </div>
        );
    };
};

