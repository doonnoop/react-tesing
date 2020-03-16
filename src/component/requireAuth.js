import React, { Component } from "react";
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class composedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        };

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.shouldNavigateAway();
        }

        shouldNavigateAway () {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        };

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps)(composedComponent);
};