import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Navigation extends React.Component {
  componentDidMount() {
    $(document).ready(() => { $(this.refs.buttonCollapse).sideNav(); });
  }
  render() {
    return (
      <div>
        <nav className="custom-nav-wrapper">
          <div className="nav-wrapper">
            <a href="" className="brand-logo custom-logo-wrap">HelloBooks</a>
            <a href=""
              data-activates="mobile-demo"
              className="button-collapse"
              ref="buttonCollapse"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down custom-nav-list"
            >
              <li><a href="">{this.props.help}</a></li>
              <li><a href="">{this.props.name}</a></li>
              <li><Link to=''>{this.props.signOut}</Link></li>
            </ul>
            <ul
              id="mobile-demo"
              className="side-nav"
            >
              <li><a href="">{this.props.help}</a></li>
              <li><a href="">{this.props.name}</a></li>
              <li><Link to=''>{this.props.signOut}</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navigation;