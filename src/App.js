import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import styled from 'styled-components'

/**
 * Containers
 */
import Header from './containers/Header';

/**
 * Route pages
 */
import PostsPage from './pages/PostsPage'
import SinglePost from './pages/SinglePost'
import ErrorPage from './pages/ErrorPage'

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #000;
`;

class App extends Component {

  render() {
    return (
        <Wrapper>
          <Header
            showPopUp={this.showPopUp}
          />
          <Switch>
            <Route exact path='/' component={PostsPage}/>
            <Route path='/posts/:postId' component={props => <SinglePost {...props} />}/>
            <Route component={ErrorPage}/>
          </Switch>
        </Wrapper>
    );
  }
}

export default App;
