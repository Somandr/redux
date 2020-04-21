import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { title } = this.state;
        const newPost = {
            title,
            id: Date.now().toString(),
        };
console.log(newPost)
        this.setState({ title: '' });
    };

    changeInputHandler = (event) => {
        event.persist();
        this.setState((prev) => ({
            ...prev,
            ...{
                [event.target.name]: event.target.value,
            },
        }));
    };
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">
                    Load
                </button>
            </form>
        );
    }
}
