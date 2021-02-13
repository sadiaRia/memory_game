import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('LLLL')
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">TASKS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
