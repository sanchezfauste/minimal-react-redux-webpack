import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListItem from "./ListItem"

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
