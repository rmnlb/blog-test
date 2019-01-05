import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Head = styled.div`
    margin: 0;
    background: #b3daff;
    width: 100%;
    text-align: center;
`;

const Title = styled.h2`
    margin: 0;
    flex-basis: 100%;
    padding-top: 15px;
    font-family: 'Indie Flower', cursive;
    font-size: 1.7rem;
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 25px 15px;
`;

const HeaderLink = styled(Link)`
    display: block;
    color: #000;
    text-decoration: none;
    flex-basis: max-content;
    :hover, :visited {
        color: #000;
    }
`;

const Header = (props) => (
    <Head>
        <Title>Simple Blog</Title>
        <Nav>
            <HeaderLink to="/">Latest posts</HeaderLink>
            <HeaderLink to='/posts/new'>New post</HeaderLink>
        </Nav>
    </Head>
);

export default Header;

//<button onClick={props.showPopUp}>new post</button>