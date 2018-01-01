import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader/Subheader';
import { List, ListItem } from 'material-ui/List';

const selectStyle={
    width: "90%",
    fontSize: 15,
    paddingTop: 6,
    paddingBottom: 6
}

const divStyle={
    marginTop: 70,
    width: 325,
    marginLeft: 90,
}

const rsdivStyle={
    width: 325,
    marginLeft: 90,
    backgroundColor: "white",
}

const shStyle={
    color: "black",
    fontSize: 25,
    fontWeight: "bold"
}

const liStyle={
    color: "#00BCD4",
    marginTop: -15,
    fontWeight: "bold"
}

class SearchFilter extends React.Component {
   
    render() {
        return (
        <div style={divStyle}> 
       
          <Card zDepth={0}>
           
            <CardHeader
              title="Search filter"
              actAsExpander={true}
              showExpandableButton={true}
              titleStyle={{fontWeight: "bold",
                           fontSize: 25}}
            />
            <CardText expandable={true}>
              <div>
               <div>
                <select style={selectStyle}>
                    <option value="from anyone">From anyone</option>
                    <option value="people you follow">People you follow</option>
                </select>
               </div> 
                <br />
               <div>
                <select style={selectStyle}>
                    <option value="anywhere">Anywhere</option>
                    <option value="near you">Near you</option>
                </select>
               </div> 
                <br />
               <div>
                <select style={selectStyle}>
                    <option value="all languages">All languages</option>
                    <option value="english">English</option>
                    <option value="japanese">Japanese</option>
                    <option value="spanish">Spanish</option>
                    <option value="hindi">Hindi</option>
                    <option value="gujarati">Gujarati</option>
                </select>
               </div> 
              </div>
            </CardText>
          </Card>
         
         
        </div>
        );
      }
    }

const RelatedSearch = () => (
    <div style={divStyle}>
      <List style={{backgroundColor: "white", marginTop: -55}}>
        <Subheader style={shStyle}>Related searches</Subheader>
        <ListItem primaryText="#hinduterrormythbusted"
                  style={liStyle} />
        <ListItem primaryText="#starmoviessecretscreening"
                  style={liStyle} />
        <ListItem primaryText="rahul dravid"
                  style={liStyle} />
        <ListItem primaryText="axis bank"
                  style={liStyle} />
        <ListItem primaryText="#malegaonblast"
                  style={liStyle} />
      </List>
    </div>
    );

    export default class SearchFilterRelated extends React.Component{
        render() {
            return(
                <div>
                  <SearchFilter />
                  <RelatedSearch />
                </div>
            );
        };
    };