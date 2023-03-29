import React from 'react';
import { CalculationType } from '../../redux/calculationReducer';
import classes from './Calculation.module.css'

type CalculationPropsType= {
    calculationData: CalculationType
}

export const Calculation = ({calculationData,...props}: CalculationPropsType) => {

    return (
        <div className={classes.main}>
           <div className={classes.dot}> Калибруемая отметка  {calculationData.calibrationDot} МОм при ипытательном напряжении {calculationData.testVoltage} </div>
            <table border={1}>
                <tr>
                    <td className={classes.tableTitle}>№ измерения</td>
                    <td className={classes.tableTitle}>Измеренное значение, МОм</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>1</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[0]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>2</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[1]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>3</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[2]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>4</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[3]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>5</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[4]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>6</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[5]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>7</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[6]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>8</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[7]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>9</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[8]}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>10</td>
                    <td className={classes.tableCntent}>{calculationData.dataForCalibration[9]}</td>
                </tr>
            </table>
            <div className={classes.dot}> Результат: Среднее значение {calculationData.calibrationMiddleValue} МОм </div>

            <table border={1}>
                <tr>
                    <td className={classes.tableTitle}>Входная величина, МОм</td>
                    <td className={classes.tableTitle}>Значение оценки Xi, МОм</td>
                    <td className={classes.tableTitle}>Интервал, ±МОм</td>
                    <td className={classes.tableTitle}>Тип неопределенностей</td>
                    <td className={classes.tableTitle}>Распределение вероятностей</td>
                    <td className={classes.tableTitle}>Стандартная неопределенность, МОм</td>
                    <td className={classes.tableTitle}>Коэффициенты чувствительности, Ci</td>
                    <td className={classes.tableTitle}>Вклад неопределенности, МОм</td>
                    <td className={classes.tableTitle}>Процентный вклад, %</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>1</td>
                    <td className={classes.tableCntent}>2</td>
                    <td className={classes.tableCntent}>3</td>
                    <td className={classes.tableCntent}>4</td>
                    <td className={classes.tableCntent}>5</td>
                    <td className={classes.tableCntent}>6</td>
                    <td className={classes.tableCntent}>7</td>
                    <td className={classes.tableCntent}>8</td>
                    <td className={classes.tableCntent}>9</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>Ri0</td>
                    <td className={classes.tableCntent}>{calculationData.calibrationMiddleValue}</td>
                    <td className={classes.tableCntent}>-</td>
                    <td className={classes.tableCntent}>A</td>
                    <td className={classes.tableCntent}>нормальное</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyMiddle}</td>
                    <td className={classes.tableCntent}>1</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyMiddle}</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyMiddlePercent}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>ΔR0</td>
                    <td className={classes.tableCntent}>-</td>
                    <td className={classes.tableCntent}>{calculationData.sanadardError}</td>
                    <td className={classes.tableCntent}>B</td>
                    <td className={classes.tableCntent}>прямоугольное</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintySanadardError}</td>
                    <td className={classes.tableCntent}>1</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintySanadardError}</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintySanadardErrorPercent}</td>
                </tr>
                
                <tr>
                    <td className={classes.tableCntent}>δind</td>
                    <td className={classes.tableCntent}>-</td>
                    <td className={classes.tableCntent}>{calculationData.userError}</td>
                    <td className={classes.tableCntent}>B</td>
                    <td className={classes.tableCntent}>прямоугольное</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyUserError}</td>
                    <td className={classes.tableCntent}>1</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyUserError}</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyUserErrorPercent}</td>
                </tr>
                <tr>
                    <td className={classes.tableCntent}>Rx</td>
                    <td className={classes.tableCntent}>{calculationData.calibrationMiddleValue}</td>
                    <td className={classes.tableCntent}>   </td>
                    <td className={classes.tableCntent}>    </td>
                    <td className={classes.tableCntent}>  </td>
                    <td className={classes.tableCntent}>  </td>
                    <td className={classes.tableCntent}>   </td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyResult}</td>
                    <td className={classes.tableCntent}>{calculationData.uncertaintyResultPercent}</td>
                </tr>
            </table>
        </div>
    )
}