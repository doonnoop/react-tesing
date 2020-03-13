import React, { Component } from "react";
import { connect } from 'react-redux';

class CommentList extends Component{
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.comments.map( (comment) => {
                            return <li key={comment}>{comment}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList);