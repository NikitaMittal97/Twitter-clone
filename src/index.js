import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Timeline from './Timeline';
import SearchPage from './SearchPage';


class TabIconText extends React.Component{
    render(){
        return (
            <MuiThemeProvider>
             <Timeline />
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<TabIconText />, document.getElementById('root'));
registerServiceWorker();