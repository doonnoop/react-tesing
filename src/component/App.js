import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from '../action';

class App extends Component{
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/post'>Post A Comment</Link>
                    </li>
                    <li>
                        {
                            this.props.auth ?
                                <button onClick={() => this.props.changeAuth(false)}>SignOut</button> :
                                <button onClick={() => this.props.changeAuth(true)}>SignIn</button>
                        }
                    </li>
                </ul>
                <Route path='/post' component={CommentBox} />
                <Route path='/' exact component={CommentList} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App);