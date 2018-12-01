import React, { Component } from 'react';
import SideBar from './SideBar';
import axios from 'axios';
class ToolsPage extends Component {
    constructor(props){
        super(props);
        this.state = {tools: []};
    }
    componentWillMount(){
        axios.get('/api/posts')
        .then((res) => {
            this.setState({tools: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render(){
        return(
            <div className="standardcontent" id="toolspage">
                {this.state.tools.map(item => <h1 key={item.item_id}>{item.title}</h1>)}
            </div>
        );
    }
}
export default ToolsPage;