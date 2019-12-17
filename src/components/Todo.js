import React, { Component } from 'react';
import Item from './Item';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      items: []
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      newItem: event.target.value
    });

    event.preventDefault();
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = this.state.newItem.trim()
    if(newItem !== "")
    this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        newItem:""
    }))
  };

  render() {
    return (
      <div id="main-div">
        <Item items={this.state.items}/>

        <form onSubmit={this.handleSubmit}>
          <input placeholder="Type something ..."
            onChange={this.handleChange}
            type="text"
            id="todo-item"
            value={this.state.newItem}
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
