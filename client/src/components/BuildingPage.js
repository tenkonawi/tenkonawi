import React, { Component } from 'react';
import SideBar from './SideBar';
class BuildingPage extends Component {
    render(){
        return(
            <div id="mainwrapper">
                <SideBar/>
                <h1>building page</h1>
            </div>
        );
    }
}
export default BuildingPage;