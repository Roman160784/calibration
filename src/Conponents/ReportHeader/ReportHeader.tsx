import React from 'react';
import bgca from '../../Logo/bgca.jpg'
import iso from '../../Logo/iso.png'
import classes from './ReportHeader.module.css'

export const ReportHeader = () => {


    return (
        <div>
        <div className={classes.mainHeaderBlock}>
            <div className={classes.title}>
                РЕСПУБЛИКАНСКОЕ УНИТАРНОЕ ПРЕДПРИЯТИЕ
                <br />
                «ГОМЕЛЬСКИЙ ЦЕНТР СТАНДАРТИЗАЦИИ, МЕТРОЛОГИИ И
                <br />
                СЕРТИФИКАЦИИ»
            </div>
            <div className={classes.pictures}>
                Свидетельство об
                <br />
                уполномочивании №16
                <br />
                от 25.11.2022
                <br />
                <img src={bgca} alt="bgca" />
                <img src={iso} alt="iso" />
            </div>
            
        </div>
        <div className={classes.adress}>
                <div className={classes.metr}>Отдел метрологии</div>
                <div className={classes.adr}>246015, г.Гомель, ул.Лепешинского, 1</div>
                <div className={classes.tel}>тел. +375 232 26-33-03      mail@gomelcsms.by        www.gomelcsms.by</div>
            </div>
        </div>
    )
}