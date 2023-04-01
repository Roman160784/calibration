import React, { useState } from 'react';
import { addCalibrationFieldAC, CalculationType, changeCallibrationValueAC, changeTestVoltageAC, removeCalibtationFieldAC } from '../../redux/calculationReducer';
import { useAppDispatch } from '../../redux/store';
import { Button } from '../CommonComponents/Button/Button';
import { EditableSpan } from '../CommonComponents/EditableSpan/EditableSpan';
import { EditableSpanFalse } from '../CommonComponents/EditableSpanFalse/EditableSpanFalse';
import { Modal } from '../CommonComponents/Modal/Modal';
import classes from './Calculation.module.css'

type CalculationPropsType= {
    calculationData: CalculationType
}

export const Calculation = ({calculationData,...props}: CalculationPropsType) => {

    const [modal, setModal] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    

    const changeCalibrationValue = (value: string, id: string, i: number) => {
      dispatch(changeCallibrationValueAC({value: +value, id: id, i: i,})) 
    }

    const changeTestVoltage = (id: string, title: string) => {
        dispatch(changeTestVoltageAC({id: id, voltage: title}))
    }

    const removeCalibratonField = (id: string) => {
        dispatch(removeCalibtationFieldAC({id: id}))
        setModal(false)
    }

    const removeButtonHandler = () => {
        setModal(true)
    }

    const buttonNoHandler = () => {
        setModal(false)
    }

    return (
        <div className={classes.main}>
           
            <table className={classes.firstTable} border={1}>
                <tr>
                    <td className={classes.tableTitle}>№ измерения</td>
                    <td className={classes.tableTitle}>Измеренное значение, МОм</td>
                </tr>
                {
                    calculationData.dataForCalibration.map((el, i) => {
                        return(
                            <tr key={i}>
                               <td className={classes.tableCntent}>{i+1}</td> 
                              < td className={classes.tableCntent}>
                    <EditableSpanFalse title={el.toString()} 
                    changeTitle={(title)=> {changeCalibrationValue(title, calculationData.id, i)}}/></td>
                            </tr>
                        )
                    })
                }
               
            </table>
            <div className={classes.resultBlock}>
                
                <div className={classes.dot}> Калибруемая отметка  {calculationData.calibrationDot} {`  `}  
            МОм при ипытательном напряжении  {`  `}  
            <EditableSpan title={calculationData.testVoltage} changeTitle={(title) => {changeTestVoltage(calculationData.id, title)}}/>
            </div>
            
            <div className={classes.dot}> Результат: Среднее значение {calculationData.calibrationMiddleValue} МОм </div>
            <Button title={'Удалить точку калибровки'} onClick={removeButtonHandler} classes={''}/>
            </div>
            
<br />
            <table className={classes.firstTable} border={1}>
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
                    <td className={classes.tableContent}>δind</td>
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
            
            <Modal active={modal} setActive={undefined} >
                <div className={classes.modalBlock}>
                    <h1>Точно???</h1>
                    <div className={classes.buttonBlock}>
                        <button className={classes.buttonYes} onClick={() => {removeCalibratonField(calculationData.id)}}>Да</button>
                        <button className={classes.buttonNo} onClick={buttonNoHandler}>Нет</button>
                    </div>
                </div>
                </Modal>
                
        </div>
    )
}