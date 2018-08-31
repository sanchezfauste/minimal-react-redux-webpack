import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <ListItem key={el.id} id={el.id} title={el.title} />
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;

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
