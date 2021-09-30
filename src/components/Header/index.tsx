import React from 'react'
import LOGO from '../../assets/svgs/logo.svg'
import LOGOUT from '../../assets/svgs/logout.svg'


export const Header: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={LOGO} alt="" width="162" height="45" />
        </a>
        
        <a className="navbar-brand" href="/">
          <img src={LOGOUT} alt="" width="77" height="26" />
        </a>
      </div>
    </nav>
  )
}