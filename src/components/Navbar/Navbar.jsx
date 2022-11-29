import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to='/Profile' className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
      </div >
      <div>
        <NavLink to='/Dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/News' className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
      </div>
      <div>
        <NavLink to='/Content' className={navData => navData.isActive ? classes.active : classes.item}>Content</NavLink>
      </div>
      <div>
        <NavLink to='Settings' className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;