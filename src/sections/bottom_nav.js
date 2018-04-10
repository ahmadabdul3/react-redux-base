import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import NavItem from 'srcRoot/react_bb/nav_item';
import { patientRoutes } from 'srcRoot/constants/routes';

export default class BottomNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='nav-bottom'>
        <NavItem page={patientRoutes.home} renderFirstSlash={false}>
          <i className="fa fa-lg fa-home lg" aria-hidden="true"></i>
        </NavItem>

        <NavItem page='chat'>
          <i className="fa fa-lg fa-comments-o" aria-hidden="true"></i>
        </NavItem>

        <NavItem page='patient/objectives'>
          <i className="fa fa-lg fa-list" aria-hidden="true"></i>
        </NavItem>

        <NavItem page='timeline'>
          <i className="fa fa-lg fa-history lg" aria-hidden="true"></i>
        </NavItem>
      </nav>
    );
  }
}
//
// <NavItem page='notifications'>
//   <i className="fa fa-lg fa-bell" aria-hidden="true"></i>
// </NavItem>
