import React, { Component } from 'react';
import { Link } from 'react-router';
import appRoutes from 'srcRoot/constants/routes';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    const { clearUser } = this.props;
    localStorage.removeItem('jwt-token');
    clearUser();
    window.location.href = appRoutes.login;
  }

  render() {
    return (
      <nav className='navigation'>
        <div className='page-width'>
          <div className='nav-left'>
            <Link to={appRoutes.home} activeClassName='' className='nav-item'>
              PROJ
            </Link>
          </div>
          <div className='nav-right'>
            <NavItem url={appRoutes.home} text='Home' />
            <div className='nav-item' onClick={this.logout}>
              Logout
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function NavItem({ url, text }) {
  return (
    <Link to={url} activeClassName='selected' className='nav-item'>
      { text }
    </Link>
  );
}
