import React from 'react'
import CommentInput from '../../components/CommentInput'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 0 auto;
    width: 75%;
`;
const Title = styled.p`
    font-family: 'Indie Flower', cursive;
    font-size: 1.3rem;
`;
const Comment = styled.div`
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
    span {
        font-size: 0.8rem;    
    }
`;

const CommentsBlock = (props) => {
    return (
        <Wrapper>
            <Title>Comments:</Title>
            {
                props.comments && props.comments.length
                    ? props.comments.map((comment, i) => (
                        <Comment key={i}>
                            <span>Logged user</span>
                            <p>{comment.body}</p>
                        </Comment>
                    ))
                    : <div>Be the first who leave a comment</div>
            }
            <CommentInput addComment={props.addComment}/>
        </Wrapper>
    )
};

export default CommentsBlock;