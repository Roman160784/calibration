import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathEnum } from '../MainPage';
import classes from './Nav.module.css'

export const Nav = () => {
    return (
        <nav >
            <div className={classes.mainNav}>
                <NavLink className={''} to={pathEnum.es0202}>
                    ЭС0202/2
                </NavLink>
            </div>
            
        </nav>
    )
}