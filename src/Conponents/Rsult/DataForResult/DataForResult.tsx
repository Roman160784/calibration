import React from 'react';
import { ResultType } from '../../../redux/resultReducer';
import classes from '../result.module.css'

type DataForResult = {
    calibrationResult: ResultType
}

export const DataForResult = ({...props} : any) => {

    return (
        <tr>
            <td className={classes.td}>2 MОм</td>
            <td className={classes.td}>500 В</td>
            <td className={classes.td}>1,7 МОм</td>
            <td className={classes.td}> -0,3 МОм</td>
            <td className={classes.td}>±0,075 МОм</td>
            <td className={classes.td}>0,5 МОм</td>
            <td className={classes.td}>95</td>
            <td className={classes.td}>2</td>
        </tr>
    )
}