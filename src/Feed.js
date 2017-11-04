import React, { Component } from 'react';
import styled from 'styled-components';
import posts from './data/posts.js';
import Post from './Post';

const times = ['minutes', 'hours', 'days'];

const Container = styled('main')`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 0 1.5rem;
`

const Posts = styled('div')`
  max-width: 30rem;
  width: 100%;
`

class Feed extends Component {
  state = {
    allPosts: posts.map((post, index) => {return {...post, key: `post${index}-0`}}),
    displayedPosts: [],
    round: 1,
  }

  componentDidMount() {
    this.addPost();
    this.postInterval = setInterval(this.addPost, 5000);
  }

  componentDidUpdate() {
    if (this.state.displayedPosts.length < 5) {
      this.addPost();
    }
  }

  componentWillUnmount(){
    clearInterval(this.postInterval);
  }

  addPost = () => {
    if (this.state.allPosts.length > 0) {
      const post = this.state.allPosts[Math.floor(Math.random()*this.state.allPosts.length)];
      const time = `${Math.floor(Math.random() * (30 - 2) + 2)} ${times[Math.floor(Math.random()*times.length)]} ago`;
      this.setState({
        allPosts: this.state.allPosts.filter(function( obj ) {
            return obj.name !== post.name;
        }),
        displayedPosts: [
          <Post {...post} time={time} recent />,
          ...this.state.displayedPosts.map(post => {
            return {
              ...post,
              props: {
                ...post.props,
                recent: false,
              }
            }
          })
        ],
      });
    } else {
      const round = this.state.round + 1;
      this.setState({
        allPosts: posts.map((post, index) => {return {...post, key: `post${index}-${round}`}}),
        round,
      })
    }
  }

  render() {
    return (
      <Container>
        <Posts>
          {this.state.displayedPosts}
        </Posts>
      </Container>
    );
  }
}

export default Feed;
