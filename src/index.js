import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ToolBar from './AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListExampleChat from './SubHeaderRight' 
import SubHeaderRight from './SubHeaderRight';
import DisplayProfile from './DisplayProfile';
import TrendsList from './TrendsList';
import Contents from './Content';
import Copyright from './Copyright';

class TabIconText extends React.Component{
    render(){
        return (
            <MuiThemeProvider>
            <ToolBar />
            <div className="flex-container">
            <div className="leftVertical">
            <div><DisplayProfile /></div>
            <div><TrendsList /></div>
            </div>
            <div><Contents /></div>
            <div>
            <div><SubHeaderRight /></div>
            <div><Copyright /></div>
            </div>
            </div>
            
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<TabIconText />, document.getElementById('root'));
registerServiceWorker();