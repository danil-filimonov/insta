import React from 'react'

import { NavLink } from 'react-router-dom'

import { Image } from 'antd'

import logo from '../../assets/images/logo.png'

import './index.scss'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <NavLink to='/'>
          <Image width={103} src={logo} preview={false} style={{marginTop: '8px'}} />
        </NavLink>
        <nav className='navigation'>
          <NavLink className='navigation-link' to='/'>
            Feed
          </NavLink>
          <NavLink className='navigation-link' to='/profile'>
            Profile
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
