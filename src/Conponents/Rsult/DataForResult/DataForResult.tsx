import React from 'react';
import { ResultType } from '../../../redux/calculationReducer';
import classes from '../result.module.css'

type DataForResult = {
    calibrationResult: ResultType
}

export const DataForResult = ({calibrationResult, ...props} : DataForResult) => {

    return (
        <>
            <td className={classes.td}>{calibrationResult.calibrationDot} MОм</td>
            <td className={classes.td}>{calibrationResult.testVoltage}</td>
            <td className={classes.td}>{calibrationResult.calibrationMiddleValue} МОм</td>
            <td className={classes.td}> {calibrationResult.error} МОм</td>
            <td className={classes.td}>± {calibrationResult.permissibleValue} МОм</td>
            <td className={classes.td}>{calibrationResult.expandedUncertainty} МОм</td>
            <td className={classes.td}>{calibrationResult.probability}</td>
            <td className={classes.td}>{calibrationResult.coefficient}</td>
        </>
    )
}