import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import classes from './MainPage.module.css'
import { ReportEso } from '../../Conponents/Es0202/reportEso';
import { Certificate } from '../../Conponents/Certificate/Certificate';



export enum pathEnum {
    main = '/',
    es0202 = '/es0202',
    error404 = '/404',
    certificate = '/certificate'
}



export const MainCalibrationPage = () => {
    return (
        <div className={classes.mainPage}>
            <br />
            <br />

            <Routes>
                <Route path={pathEnum.main} element={<Nav />} />
                <Route path={pathEnum.es0202} element={<ReportEso />} />
                <Route path={pathEnum.certificate} element={<Certificate />} />
            </Routes>
        </div>

    )

}