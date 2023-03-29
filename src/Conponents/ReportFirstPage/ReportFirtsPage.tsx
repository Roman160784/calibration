
import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { addCalibrationFieldAC } from '../../redux/calculationReducer';
import { changeCalibrationConditionsAC, changeCalibrationStandatdAC, changeReportParameterAC } from '../../redux/reportReducer';
import { selectReport } from '../../redux/selectors/reportSelector';
import { useAppDispatch } from '../../redux/store';
import { EditableSpan } from '../CommonComponents/EditableSpan/EditableSpan';
import { Input } from '../CommonComponents/Input/Input';
import classes from './ReportFirstPage.module.css'

export const ReportFirstPage = () => {

    const dispatch = useAppDispatch()
    const report = useSelector(selectReport)

    

    const changeReportParametr = ( key: string, parameter: string) => {
        dispatch(changeReportParameterAC({ key, parameter}))
    }

    const changeReportWatherParametr = ( key: string, parameter: string) => {
        dispatch(changeCalibrationConditionsAC({ key, parameter}))
    }
    const changeReporStandardParametr = ( key: string, parameter: string) => {
        dispatch(changeCalibrationStandatdAC({ key, parameter}))
    }

  

    return (
        <div>
        <div className={classes.main}>
            <div className={classes.reportNumber}>ПРОТОКОЛ КАЛИБРОВКИ № {''} 
            <EditableSpan title={ report.reportNumber} changeTitle={(title) => {changeReportParametr( 'reportNumber', title)}}/>
             </div>

            <table className={classes.table} border={2}>
                <tr>
                    <td>Объект калибровки:</td>
                    <td><EditableSpan title={ report.calibrationObject} 
                    changeTitle={(title) => {changeReportParametr( 'calibrationObject', title)}}/></td>
                </tr>
                <tr>
                    <td>Заводской номер:</td>
                    <td><EditableSpan title={ report.serialNumber} 
                    changeTitle={(title) => {changeReportParametr( 'serialNumber', title)}}/>
                    </td>
                </tr>
                <tr>
                    <td>Основания для проведения калибровки:</td>
                    <td><EditableSpan title={ report.application} 
                    changeTitle={(title) => {changeReportParametr( 'application', title)}}/></td>
                </tr>
                <tr>
                    <td>Наименование заказчика:</td>
                    <td><EditableSpan title={ report.customer} 
                    changeTitle={(title) => {changeReportParametr( 'customer', title)}}/></td>
                </tr>
                <tr>
                    <td>Адрес Заказчика:</td>
                    <td><EditableSpan title={ report.adresCustumer} 
                    changeTitle={(title) => {changeReportParametr( 'adresCustumer', title)}}/></td>
                </tr>
                <tr>
                    <td>Место проведения калибровки:</td>
                    <td><EditableSpan title={ report.calibrarionPlace} 
                    changeTitle={(title) => {changeReportParametr( 'calibrarionPlace', title)}}/></td>
                </tr>
                <tr>
                    <td>Дата проведения калибровки:</td>
                    <td><EditableSpan title={ report.calibrationDate} 
                    changeTitle={(title) => {changeReportParametr( 'calibrationDate', title)}}/></td>
                </tr>
                <tr>
                    <td>Метод, методика калибровки:</td>
                    <td><EditableSpan title={ report.method} 
                    changeTitle={(title) => {changeReportParametr( 'method', title)}}/></td>
                </tr>
                <tr>
                    <td>Условия проведения калибровки:</td>

                    <td>Температура воздуха: <EditableSpan title={ report.calibrationConditions.temperature} 
                    changeTitle={(title) => {changeReportWatherParametr( 'temperature', title)}}/> ºС
                        <tr>
                            <td>Относительная влажность воздуха:   <EditableSpan title={ report.calibrationConditions.relativeHumidity} 
                    changeTitle={(title) => {changeReportWatherParametr( 'relativeHumidity', title)}}/> %</td>
                        </tr>
                        <tr> <td>Атмосферное давление: <EditableSpan title={ report.calibrationConditions.pressure} 
                    changeTitle={(title) => {changeReportWatherParametr( 'pressure', title)}}/> кПа</td> </tr>
                        <tr> <td>Напряжение питающей сети: <EditableSpan title={ report.calibrationConditions.supplyVoltage} 
                    changeTitle={(title) => {changeReportWatherParametr( 'supplyVoltage', title)}}/> B</td> </tr>
                        <tr> <td>Частота питающей сети: <EditableSpan title={ report.calibrationConditions.frequency} 
                    changeTitle={(title) => {changeReportWatherParametr( 'frequency', title)}}/> Гц</td> </tr>
                    </td>
                </tr>
            </table>
            </div>
            
            <div className={classes.secondPage}>
                Эталоны, применяемые при калибровке:
                <table className={classes.standardTable} border={1}>
                    <tr>
                        <td> Наименование </td>
                        <td> Тип</td>
                        <td> Зав. №</td>
                        <td>Дата метрологической оценки</td>
                    </tr>
                    <tr>
                        <td><EditableSpan title={ report.standard.standardName} 
                    changeTitle={(title) => {changeReporStandardParametr( 'standardName', title)}}/></td>
                        <td><EditableSpan title={ report.standard.standardType} 
                    changeTitle={(title) => {changeReporStandardParametr( 'standardType', title)}}/></td>
                        <td><EditableSpan title={ report.standard.standardNumber} 
                    changeTitle={(title) => {changeReporStandardParametr( 'standardNumber', title)}}/></td>
                        <td><EditableSpan title={ report.standard.calibrationDate} 
                    changeTitle={(title) => {changeReporStandardParametr( 'calibrationDate', title)}}/></td>
                    </tr>

                </table>
                <div>
                    Обеспечивается прослеживаемость результатов измерений до Национального эталона
                    <br />
                    электрического сопротивления - Ома НЭ РБ 29-16
                </div>
                <div className={classes.string}>
                    Математическая модель: Rx = Ri0 +ΔR0 +δind
                    <div>
                        где:
                    </div>
                    <div>Rx – показания калибруемого устройства, Ом</div>
                    <div> Ri0 – показания эталона, Ом</div>
                    <div> ΔR0 – основная абсолютная погрешность эталона, Ом</div>
                    <div> δind – поправка, обусловленная разрешающей способность, Ом</div>
                </div>
                <div className={classes.string}>Корреляция входных величин: отсутствует.</div>
                <div >Результаты измерений и наблюдений:</div>
                <div > 1 Внешний осмотр: соответствует : МК.ГМ 1580 - 2013</div>
                <div > 2 Опробование: соответствует:  МК.ГМ 1580 - 2013</div>
                <div className={classes.string}> 3 Определение значений  на калибруемых отметках:</div>
            </div>
        </div>

    )
}