import React, { Component } from 'react';
import SideBar from './SideBar';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class PostsPage extends Component {
    constructor(props){
        super(props);
        this.state = {posts: [], filteredPosts: [], itemVisible: {}};
        this.changeFilter = this.changeFilter.bind(this);
        this.toggleVisiblity = this.toggleVisiblity.bind(this);
    }
    componentWillMount(){
        axios.get('/api/posts')
        .then((res) => {
            this.setState({posts: res.data})
            this.setState({filteredPosts: this.state.posts})
        })
        .catch((err) => {
            console.log(err);
        })
    }
    changeFilter(value){
        if(value != ""){
            this.setState({filteredPosts: this.state.posts.filter(post => post.category === value)})
        }
    }
    toggleVisiblity(id){
        let itemVisible = this.state.itemVisible;
        itemVisible[id] = itemVisible[id] === "visible" ? "hidden" : "visible";
        this.setState({itemVisible});
    }
    render(){
        return(
            <div className="standardcontent" id="postspage">
                <button className="btn btn-primary buttonspacing" onClick={() => this.changeFilter("Posts")} type="button">Posts</button>
                <button className="btn btn-primary buttonspacing" onClick={() => this.changeFilter("Items")} type="button">Items</button><br></br>
                {this.state.filteredPosts.map(item => (
                    <div className="postbox" id={item.item_id} key={item.item_id} onClick={() => this.toggleVisiblity(item.item_id)}>
                        <h1>{item.title}</h1>
                        <p visibility={this.state.itemVisible[item.item_id]} className="postcontent">{item.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}
export default PostsPage;