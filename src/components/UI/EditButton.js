import React from 'react';
import styled from 'styled-components'

const CustomButton = styled.button`
    background: 'none';
    border: none;
    position: absolute;
    top: 0;
    right: 0;
`;

const EditButton = (props) => (
    <CustomButton
        onClick={props.action}
    >{props.name}</CustomButton>
);

export default EditButton;