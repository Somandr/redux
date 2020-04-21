import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';


class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
      const { title } = this.state;
      if (!title.trim()) {
        return
      }
        const newPost = {
            title,
            id: Date.now().toString(),
        };
      this.setState({ title: '' });
      this.props.createPost(newPost)
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

const mapDispatchToProps = {
  createPost,
}

export default connect(null, mapDispatchToProps)(PostForm);