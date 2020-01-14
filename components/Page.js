import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#201E1F',
  red: '#FF4000',
  tangerine: '#FAAA8D',
  white: '#FEEFDD',
  blue: '#08b2e3',

};

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
`;

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}