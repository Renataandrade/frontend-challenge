import React from 'react'
import LOGO from 'assets/svgs/logo.svg'
import LOGOUT from 'assets/svgs/logout.svg'
import AuthService from 'services/AuthService';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchAuthenticated } from 'store/auth';


export const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector((store) => store.auth)
  
  const logout = () => {
    const Auth = new AuthService()
    Auth
    .logout()
    .then(() => {
      dispatch(fetchAuthenticated(false))
    })
  }

  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={LOGO} alt="" width="162" height="45" />
        </a>
        
        {(isAuthenticated) && (
          <a 
            className="navbar-brand" 
            href="#"
            onClick={() => logout()}
          >
            <img src={LOGOUT} alt="" width="77" height="26" />
          </a>
        )}
      </div>
    </nav>
  )
}