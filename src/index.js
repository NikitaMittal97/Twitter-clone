import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppBarLeft from './AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListExampleChat from './SubHeaderRight' 
import SubHeaderRight from './SubHeaderRight';
import DisplayProfile from './DisplayProfile';
import TrendsList from './TrendsList';

class TabIconText extends React.Component{
    render(){
        return (
            <MuiThemeProvider>
            <AppBarLeft />
            <div className="flex-container">
            <div className="leftVertical">
            <div><DisplayProfile /></div>
            <div><TrendsList /></div>
            </div>
            <div><SubHeaderRight /></div>
            </div>
            
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<TabIconText />, document.getElementById('root'));
registerServiceWorker();