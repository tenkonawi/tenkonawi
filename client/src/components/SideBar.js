import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class SideBar extends Component {
    render(){
        return(
            <div id="sidebar">
                <div id="sidebarfixed">
                    <div id="sidebarheader">
                        <img src="/images/monkeylogo.svg" id="sitelogo"></img>
                        <h1>tenkonawi</h1>
                    </div>
                    <div id="quicklinks">
                        <div className="toolwrapper">
                            <div className="secondarytoolwrapper">
                                <NavLink to="/tools">
                                    <img src="/images/toolslogo.svg" className="toolsicon"></img>
                                    <p>Tools</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="toolwrapper">
                            <div className="secondarytoolwrapper">
                                <NavLink to="/building">
                                    <img src="/images/buildinglogo.svg" className="toolsicon"></img>
                                    <p>Currently Building</p>
                                </NavLink>
                            </div>
                            
                        </div>
                        <div className="toolwrapper">
                            <div className="secondarytoolwrapper">
                                <NavLink to="/posts">
                                    <img src="/images/bloglogo.svg" className="toolsicon"></img>
                                    <p>Blog</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SideBar;