import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class SideBar extends Component {
    render(){
        return(
            <div id="sidebar">
                <h1>side bar</h1>
                <ul>
                    <li><NavLink to="/tools">Tools</NavLink></li>
                    <li><NavLink to="/building">Currently Building</NavLink></li>
                    <li><NavLink to="/posts">Blog</NavLink></li>
                </ul>
            </div>
        );
    }
}
export default SideBar;