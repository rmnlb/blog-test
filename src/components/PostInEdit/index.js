import React, { Component } from 'react';
import styled from 'styled-components';
import EditButton from '../UI/EditButton'
import Caption from '../UI/Caption'

const Wrapper = styled.div`
  max-width: 600px;
  margin: 5px auto;
  padding-top: 20px;
  position: relative;

    input {
        margin-bottom: 0;
        margin-top: 0; 
        width: 100%;
        font-family: 'Indie Flower', sans-serif;
        font-size: 2.5rem;
        border: none;
    }

  textarea {
        margin-top: 16px;
        width: 100%;
        height: ${window.innerHeight - 300}px;
        border: none;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
  }
`;

class PostInEdit extends Component {
    render() {
        return (
            <Wrapper>
                <EditButton
                    action={() => this.props.saveEdited(
                        this.postTitle.value,
                        this.postBody.value,
                    )
                    }
                    name='Save'
                />
                <input
                    ref={input => { this.postTitle = input }}
                    placeholder='Title'
                    defaultValue={this.props.post.title || ''}
                />
                <Caption>EDIT MODE</Caption>
                <textarea
                    ref={textarea => { this.postBody = textarea }}
                    placeholder='Content'
                    defaultValue={this.props.post.body || ''}
                />
            </Wrapper>
        );
    }
}

export default PostInEdit;
