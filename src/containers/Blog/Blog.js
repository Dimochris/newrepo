import React, { Component } from 'react';
import axios from 'axios';
// components
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
// classes css
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Chris'
                    }
                })
                this.setState({ posts: updatedPosts });
                // console.log(response);
            });
    }

    clicked = (id) => { 
        this.setState({selectedPost: id});
        // console.log("eimai edw");
        // console.log("ID is: "+ id);
        // console.log(id);
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author='Chris' clicked={()=> this.clicked(post.id)}/>
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;