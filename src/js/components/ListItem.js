import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

class ListItemComponent extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.removeArticle(this.props.id);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.title} (<a href='#' onClick={this.handleClick}>remove</a>)
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: article => dispatch(removeArticle(article))
  };
};

const ListItem = connect(null, mapDispatchToProps)(ListItemComponent);

export default ListItem;
