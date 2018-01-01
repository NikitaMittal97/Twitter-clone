import React from 'react';
import SearchFilterRelated from './SearchFilter';
import SubheaderRight from './SubHeaderRight';
import TrendsList from './TrendsList';
import SearchFollow from './SPFollow';
import SPTrends from './SPTrends'
import SPContents from './SPContents';
import SPTab from './SPTabs';
import ToolBar from './AppBar'

export default class SearchPage extends React.Component {
    render() {
        return(
            <div>
                <ToolBar />
                <SPTab />
                <div className="spFlexContainer">
                    <div>
                        <div><SearchFilterRelated /></div>
                        <div><SearchFollow /></div>
                        <div><SPTrends /></div>
                    </div>
                    <div><SPContents /></div>
                </div>
            </div>
        );
    };
};