import React from 'react'
import CardHeader from 'material-ui/Card/CardHeader'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PhotoAdd from 'material-ui/svg-icons/image/photo-camera';
import borderColor from 'material-ui/svg-icons/editor/border-color';

const buttonStyle = {
    marginLeft: "20px",
    top: -25,
    borderColor: "white",
    borderWidth: 3,
    borderStyle: "solid",
    position: "absolute"
  };

const style = {
    marginTop: 10,
    marginLeft: 90,
    marginBottom: 0,
    fontFamily: "fantasy"
};

const pStyle = {
    marginTop: 0,
    marginLeft: 90,
    color: 'darkgrey',
    fontFamily: "fantasy",
    marginBottom: 0
};


const DisplayProfile = () => (
    <div >
    
    <div style={{
        width: "325px",
        height: "100px",
        backgroundColor: "#00BCD4",
        marginLeft: "90px",
        marginTop: "20px"
    }
    } />
    
    <div style={{
        width: "325px",
        height: "130px",
        backgroundColor: "#FFFFFF",
        marginLeft: "90px",
        position: "absolute"
    }}>
       <h3 style={style}>Nikita Mittal</h3>
       <p style={pStyle}>@nikitamittal97</p>
       <FloatingActionButton style={buttonStyle} zDepth={0}>
        <PhotoAdd />
       </FloatingActionButton>
       <div style={{clear:"both"}}>
       <h5 style={{float:"left", 
                   marginLeft: 20, 
                   marginBottom: 0}}>
           Tweets
        </h5>
       <h5 style={{float: "right", 
                   marginRight: 100,
                   marginBottom:0}}>
            Following
        </h5>
       </div>
       <div style={{clear:"both"}}>
       <h3 style={{float:"left", 
                   marginLeft: 20,
                   marginTop: 5}}>
            10
        </h3>
       <h3 style={{float: "right", 
                   marginRight: 145,
                   marginTop: 5}}>
            20
        </h3>
       </div>
    </div>
    </div>
    
)

export default DisplayProfile;