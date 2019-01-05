import React from 'react';
import styled from 'styled-components';
import CommentBlock from "../../containers/CommentsBlock";
import EditButton from '../UI/EditButton'
import Caption from '../UI/Caption'

const Wrapper = styled.div`
  max-width: 600px;
  margin: 5px auto;
  padding-top: 20px;
  position: relative;

  h2 {
    margin-bottom: 0;
    margin-top: 0; 
    width: 100%;
    font-family: 'Indie Flower', sans-serif;
    font-size: 2.5rem;
    line-height: 0.9;
  }

  pre {
    min-height: 8rem; 
    width: 100%;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    white-space: pre-wrap;
  }
`;

const FullPost = (props) => {
    return (
        <Wrapper>
            <EditButton
                action={props.editPost}
                name='Edit'
            />
            <h2>{props.post.title}</h2>
            <Caption>
                {
                    `Author: ${props.post.author}, published: `
                    + new Date(+props.post.published).toLocaleString()
                }
            </Caption>
            <pre>{props.post.body}</pre>
            <CommentBlock
                comments={props.post.comments}
                addComment={props.addComment}
            />
        </Wrapper>
    )
};

export default FullPost;
