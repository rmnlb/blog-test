import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 50px;
    height: ${window.innerHeight - 300}px;
    text-align: center;
    color: salmon;

    h2 {
        font-size: 2.5rem;
        font-family: 'Indie Flower', cursive;
    }
`;

const ErrorPage = () => {
return(
    <Wrapper>
        <h2>Oops. Something goes wrong</h2>
        <p>It looks like the page you are looking for doesn't exist.</p>
        <p>Check the link or you can be <Link to='/'>redirected</Link> to the main page</p>
    </Wrapper>
)
};

export default ErrorPage;