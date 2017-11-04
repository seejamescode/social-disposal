import React, { Component } from 'react';
import styled from 'styled-components';
import Feed from './Feed';

const Container = styled('div')`
  background: #ececec;
  font-family: sans-serif;
  height: 100vh;
  left: 0;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  width: 100vw;
`

const Nav = styled('nav')`
  align-items: center;
  background: #026ad6;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  position: fixed;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;

  svg {
    margin-left: .5rem;
  }
`

const Title = styled('h1')`
  font-size: 1rem;
  margin: 0;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Title>Social Disposal</Title>
          <div>
            <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
          </div>
        </Nav>
        <Feed />
      </Container>
    );
  }
}

export default App;
