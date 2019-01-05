import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import { clearPostFields, getSinglePost } from "../../store/actions/blog";

import getData from '../../api/getData'
import postData from '../../api/postData'
import postComment from '../../api/postComment'

import FullPost from '../../components/FullPost'
import PostInEdit from '../../components/PostInEdit'
import Spinner from '../../components/Spinner';

const Wrapper = styled.div`
    padding: 25px;
    min-height: 60vh;
    text-align: left;
`;

const Warning = styled.div`
    padding-top: 50px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
    color: salmon;
    font-size: 2rem;
    font-weight: 500;
`;

class SinglePost extends Component {
    state = {
        isLoaded: false,
        isEditing: false,
    };

    getSinglePost = (res) => {
        this.setState({
            ...this.state,
            isLoaded: true,
        });
        return this.props.loadSinglePost(res)
    };

    editPost = () => {
        this.setState({
            ...this.state,
            isEditing: true,
        })
    };

    addComment = (data) => {
        postComment(+this.props.match.params.postId, data)
            .then(res => {
                getData(`posts/${res.postId}?_embed=comments`, this.getSinglePost)
            })
    };

    saveEdited = (title, body) => {
        if(title && body) {
        this.setState({
            ...this.state,
            isEditing: false,
        });
        postData(
            !this.state.isLoaded ? 'POST' : 'PUT',
            !this.state.isLoaded ? '' : `${this.props.match.params.postId}`,
            {
                title,
                body,
                author: this.props.currentPost.author || "Main Author",
                published: this.props.currentPost.published || Date.now()
            }
        )
            .then(res => {
                this.props.history.replace(`/posts/${res.id}`)
            })
        } else {
            alert('You can not craete post with empty title or content');
        }
    };

    prepareToCreateNewPost = () => {
        this.props.clearFieldsForNewPost();
        this.setState({
            ...this.state,
            isEditing: true,
        })
    };

    componentDidMount() {
        this.props.match.params.postId === 'new'
            ? this.prepareToCreateNewPost()
            : getData(`posts/${this.props.match.params.postId}?_embed=comments`, this.getSinglePost)
    }

    render() {
        return this.state.isLoaded || this.state.isEditing
            ? <Wrapper>{
                Object.keys(this.props.currentPost).length || this.props.match.params.postId === 'new'
                    ?
                    this.state.isEditing
                        ? <PostInEdit
                            post={this.props.currentPost}
                            saveEdited={this.saveEdited}
                        />
                        : <FullPost
                            post={this.props.currentPost}
                            editPost={this.editPost}
                            addComment={this.addComment}
                        />
                    : <Warning>
                        <p>{`Post with id ${this.props.match.params.postId} does not exist`}</p>
                    </Warning>
            }
            </Wrapper>
            : <Spinner />
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.data.toView
    }
};

const mapActionsToProps = (dispatch) => {
    return {
        loadSinglePost: (data) => dispatch(getSinglePost(data)),
        clearFieldsForNewPost: () => dispatch(clearPostFields())
    }
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(SinglePost);

