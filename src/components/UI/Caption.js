import React from 'react';
import styled from 'styled-components'

const PostCaption = styled.p`
    text-align: right;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 0.75rem;
`
const Caption = (props) => (
    <PostCaption>{props.children}</PostCaption>
);

export default Caption;