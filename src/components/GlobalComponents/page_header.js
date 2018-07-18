import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageHeader extends Component {
  render(){
    return (
        <div className="navbar">
          <span className="navbar-brand">
            <img src='https://officience.com/wp-content/themes/officience/images/logo_en.png' width='100px'/>
          </span>
          <span>
          <Link className='btn' to='/'>Home Page</Link>
          </span>
          <span>
          <Link className='btn' to='/community'>Community Page</Link>
          </span>
          <span>
          <Link className='btn' to='/badge'>Badge Page</Link>
          </span>
        </div>
    );
  }
}