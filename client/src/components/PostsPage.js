import React, { Component } from 'react';
import SideBar from './SideBar';
import axios from 'axios';
class PostsPage extends Component {
    constructor(props){
        super(props);
        this.state = {posts: [], filteredPosts: []};
        this.changeFilter = this.changeFilter.bind(this);
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
        else{
            this.setState({filteredPosts: this.state.posts})
        }
    }
    render(){
        return(
            <div id="mainwrapper">
                <SideBar/>
                <div id="postspage">
                    <button className="btn btn-primary buttonspacing" onClick={() => this.changeFilter("")} type="button">Clear Filter</button>
                    <button className="btn btn-primary buttonspacing" onClick={() => this.changeFilter("Posts")} type="button">Posts</button>
                    <button className="btn btn-primary buttonspacing" onClick={() => this.changeFilter("Item")} type="button">Items</button>
                    {this.state.filteredPosts.map(item => <h1 key={item.item_id}>{item.title}</h1>)}
                </div>
            </div>
        );
    }
}
export default PostsPage;