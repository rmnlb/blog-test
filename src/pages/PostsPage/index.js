import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import getData from '../../api/getData'
import {loadData} from '../../store/actions/blog'
import SmallPost from "../../components/SmallPost";
import Spinner from '../../components/Spinner'

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    h2 {
        width: 100%;
        font-family: 'Indie Flower', cursive;
        margin-bottom: 0;
    }
`;

class PostsPage extends Component {

    state = {
        isLoaded: false
    };

    getContent = (data) => {
        this.setState({
            isLoaded: true
        });
        return this.props.loadData(data)
    };

    componentDidMount() {
        getData('posts', this.getContent)
    }

    render() {
        return (
            <Wrapper>
                <h2>Latest</h2>
                {
                    this.state.isLoaded && this.props.posts.length
                        ? this.props.posts.reverse().map((post, i) => (
                            <SmallPost
                                key={i}
                                post={post}
                            />
                        ))
                        : <Spinner/>
                }
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.data.posts
    }
};

const mapActionsToProps = (dispatch) => {
    return {
        loadData: (data) => dispatch(loadData(data)),

    }
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(PostsPage);