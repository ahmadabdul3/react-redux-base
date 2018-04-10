import React, { Component, PropTypes } from 'react';
import NavItem from 'srcRoot/react_bb/nav_item';
import { Link } from 'react-router';
import { patientRoutes } from 'srcRoot/constants/routes';

export default class TopNav extends Component {
  constructor(props) {
    super(props);
  }
// std flex top unbordered-items thirds ${seperatorClass} ${backgroundVisibilityClass}
  render() {
    const { renderSeparator, backgroundColorVisible } = this.props.topNav;
    const seperatorClass = renderSeparator ? '' : 'no-separator';
    const backgroundVisibilityClass = backgroundColorVisible ? '' : 'transparent';

    return (
      <div>
        <nav className={`nav-top-large`}>
          <div className='nav-item-box-super'>
            <div className='nav-item-box-left'>
              <NavItem page={'patient/home'}>
                {/* <i className="fa fa-lg fa-ils" aria-hidden="true"></i> */}
                {/* <img className='top-nav-logo' src='https://orig00.deviantart.net/551c/f/2017/264/2/6/screen_shot_2017_09_21_at_7_33_57_pm_by_duxfox-dbo5jz0.png'/> */}
                {/* <img className='top-nav-logo' src='https://orig00.deviantart.net/0d26/f/2017/264/7/f/screen_shot_2017_09_21_at_7_43_36_pm_by_duxfox-dbo5jyw.png'/> */}

                <div className='th-logo'>
                  <img 
                    className='th-logo-image' 
                    src='https://orig00.deviantart.net/0f07/f/2017/269/9/f/screen_shot_2017_09_26_at_11_37_14_am_by_duxfox-dbomphg.png' />
                  <span className='th-logo-therapy'>Therapy</span><span className='th-logo-hub'>Hub</span>
                </div>
              </NavItem>
            </div>
            <div className='nav-item-box-right'>
              <NavItem page={patientRoutes.home} renderFirstSlash={false}>
                Home
              </NavItem>

              <NavItem page='chat'>
                Chat
              </NavItem>

              <NavItem page='patient/objectives'>
                Objectives
              </NavItem>

              <NavItem page='timeline'>
                Timeline
              </NavItem>
              <div className='nav-item' onClick={this.props.openAppMenu}>
                <i className="fa fa-lg fa-bars" aria-hidden="true" />
              </div>
            </div>
          </div>
        </nav>

        <nav className={`nav-top-small`}>
          <div className='nav-item' onClick={this.props.openAppMenu}>
            <i className="fa fa-lg fa-bars" aria-hidden="true" />
          </div>

          <NavItem page={'patient/home'}>
            <div className='th-logo'>
              <img 
                className='th-logo-image' 
                src='https://orig00.deviantart.net/0f07/f/2017/269/9/f/screen_shot_2017_09_26_at_11_37_14_am_by_duxfox-dbomphg.png' />
              <span className='th-logo-therapy'>Therapy</span><span className='th-logo-hub'>Hub</span>
            </div>
          </NavItem>

          <NavItem>
            <i className="fa" aria-hidden="true"></i>
          </NavItem>
        </nav>
      </div>
    );
  }
}
