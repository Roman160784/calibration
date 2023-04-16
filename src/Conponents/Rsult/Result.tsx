import React from 'react';
import { useSelector } from 'react-redux';
import { ResultType } from '../../redux/calculationReducer';
import { changeReportParameterAC } from '../../redux/reportReducer';
import { selectReport } from '../../redux/selectors/reportSelector';
import { useAppDispatch } from '../../redux/store';
import { EditableSpan } from '../CommonComponents/EditableSpan/EditableSpan';
import { DataForResult } from './DataForResult/DataForResult';
import classes from './result.module.css'

type ResulPropstType = {
    calibrationResult: ResultType[]
}

export const Result = ({ calibrationResult, ...props }: ResulPropstType) => {

    const dispatch = useAppDispatch()
    const report = useSelector(selectReport)


    const changeReportParametr = (key: string, parameter: string) => {
        dispatch(changeReportParameterAC({ key, parameter }))
    }

    return (
        <div className={classes.main}>
            <table className={classes.table} border={1}>
                <tr>
                    <td className={classes.td}>Калибруемая точка</td>
                    <td className={classes.td}>Испытательное напряжение</td>
                    <td className={classes.td}>Полученное значение</td>
                    <td className={classes.td}>Абсолютная погрешность</td>
                    <td className={classes.td}> Предел основной абсолютной погрешности</td>
                    <td className={classes.td}>Расширенная неопределенность</td>
                    <td className={classes.td}>Доверительная вероятность, %</td>
                    <td className={classes.td}>Коэффициент охвата</td>
                </tr>
                {
                    calibrationResult.map(r => {
                        return (
                            <tr key={r.id}>
                                <DataForResult calibrationResult={r} />
                            </tr>
                        )
                    })
                }

            </table>
            <div className={classes.table}>
                Расширенная неопределённость получена путём умножения суммарной стандартной непределённости на коэффициент охвата k соответствующий уровню доверия, приблизительно равному 95% при допущении вида распределения, указанного в таблице. Оценивание неопределённости проведено в соответствии с "Руководством по выражению неопределённости в измерениях GUM"
            </div>
            <div className={classes.table}>
                Заключение о соответствии:
                <div className={classes.table}>{report.calibrationObject} № {report.serialNumber}</div>
                <div className={classes.table}>
                    в калибруемых точках соответствует  обязательным метрологическим требованиям в соответствии с описанием типа при установлении соответствия применно правило принятия решения, основанное на простой приёмке в соответствии с СТБ ISO/IEC Guide 98-4-2019
                </div>
                <div className={classes.table}>Калибровочное клеймо: <EditableSpan title={report.stigma}
                    changeTitle={(title) => { changeReportParametr('stigma', title) }} /></div>
                <div className={classes.table}>
                    Калибровку выполнил: <span> __________ <EditableSpan title={report.engineer}
                        changeTitle={(title) => { changeReportParametr('engineer', title) }} /></span>
                </div>
                <div className={classes.table}>
                    Проверил :  <span> __________ <EditableSpan title={report.boss}
                        changeTitle={(title) => { changeReportParametr('boss', title) }} /> </span>
                </div>
            </div>
        </div>
    )
}