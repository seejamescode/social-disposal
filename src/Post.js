import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';

const Container = styled('section')`
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(calc(-100% - 1.5rem));
    }
    10% {
      opacity: 1;
      transform: translateY(calc(-100% - 1.5rem));
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: 1.1s ease-out 0s 1 slideIn;
  background: white;
  box-sizing: border-box;
  padding: 1.5rem;
  width: 100%;

  p {
    margin: 1.5rem 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`

const MarginTop = styled('div')`
  padding-top: 1.5rem;
`

const Media = styled('img')`
  width: 100%;
`

const Meta = styled('div')`
  align-items: center;
  display: flex;

  img {
    border-radius: 50%;
    height: 4.5rem;
    margin-right: 1.5rem;
  }

  p {
    margin: 0;
  }
`

class Post extends Component {
  state = {
    opened: false,
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ opened: true });
    }, 500);
  }

  render() {
    console.log(this.props.initial);
    return (
      <Collapse springConfig={{stiffness: 300, damping: 40}} isOpened={this.state.opened}>
        <MarginTop />
        <Container initial={this.props.initial}>
          <Meta>
            <img alt={`headshot of ${this.props.name}`} src={this.props.profile} />
            <div>
              <p>{this.props.name}</p>
              <p><small>{this.props.time}</small></p>
            </div>
          </Meta>
          <p>{this.props.text}</p>
          {
            this.props.media
              ? <Media alt={`obviously staged photo}`} src={this.props.media} />
              : null
          }
        </Container>
      </Collapse>
    );
  }
}

export default Post;
