import React from 'react'
import SubHeaderRight from './SubHeaderRight';
import DisplayProfile from './DisplayProfile';
import TrendsList from './TrendsList';
import Contents from './Content';
import Copyright from './Copyright';
import ToolBar from './AppBar'

export default class Timeline extends React.Component {
    render() {
        return(
  <div>
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
  </div>
    );
  }
}

