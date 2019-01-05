import React, {Component} from 'react'
import styled from 'styled-components';

const CustomTextarea = styled.textarea`
    width: 100%;
    border-radius: 5px;
    padding: 7px;
    font-family: 'Montserrat', sans-serif;
`;

class CommentInput extends Component{
    state={
        value: ''
    };

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        return (<div>
        <CustomTextarea
            name="comment"
            placeholder="Write a comment"
            value={this.state.value}
            onChange={this.changeValue}
        />
            <input
                disabled={!this.state.value}
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    this.props.addComment(this.state.value);
                    this.setState({
                        value: ''
                    })
                }}
                value='Leave commentt'
            />
        </div>)
    }
}

export default CommentInput;