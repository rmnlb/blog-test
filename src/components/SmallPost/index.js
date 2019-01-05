import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Preview = styled.div`
    position: relative;
    text-align: left;
    width: 300px;
    height: 135px;
    margin: 10px;
    box-shadow: 0 0 5px lightgrey;
    padding: 10px;
`;

const Title = styled.p`
    width: auto;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
`;

const ShortDescription = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Caption = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin-bottom: 0;
    margin-top: 0;
    color: grey;
    font-size: 0.85rem;

    p {
        text-align: right;
        margin: 0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    
    :hover, :visited {
        color: black;
    }
`;

const SmallPost = (props) => {
    return (
        <StyledLink to={`/posts/${props.post.id}`}>
            <Preview>
                <Title>{props.post.title}</Title>
                <ShortDescription>{props.post.body}</ShortDescription>
                <Caption>
                <p>
                    {
                        `Published by: ${props.post.author}`
                    }
                </p>
                <p>
                    {
                        new Date(+props.post.published).toLocaleString()
                    }
                </p>
                </Caption>
            </Preview>
        </StyledLink>
    )
};

export default SmallPost;