import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { v1 } from 'uuid';
import { pathEnum } from '../../Main/MainPage/MainPage';
import { addCalibrationFieldAC } from '../../redux/calculationReducer';
import { selectCAlculationData } from '../../redux/selectors/calculationSelector';
import { useAppDispatch } from '../../redux/store';
import { Calculation } from '../Calculation/Calculation';
import { Button } from '../CommonComponents/Button/Button';
import { Input } from '../CommonComponents/Input/Input';
import { ReportFirstPage } from '../ReportFirstPage/ReportFirtsPage';
import { ReportHeader } from '../ReportHeader/ReportHeader';
import { Result } from '../Rsult/Result';
import classes from './reportEso.module.css'



export const ReportEso = () => {

    const navigate = useNavigate()
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const calculationData = useSelector(selectCAlculationData)
    const calibrationResult = calculationData.result

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onblurHandler = () => {
        if (value.trim() !== '') {
            dispatch(addCalibrationFieldAC({id: v1(),  dot: +value,}))
        }
        setValue('')
    }

    const createCertificateHandler = () => {
        navigate(pathEnum.certificate)
    }

    return (
        <div>
            <div>
                <ReportHeader />
            </div>
            <div>
                <ReportFirstPage />
            </div>
            {calculationData.calculation.map(c => {
                return (
                    <div key={c.id}>
                        <Calculation calculationData={c} />
                    </div>
                )
            })}
            <div className={classes.input}>
                <Input value={value} onChange={inputHandler} onBlur={onblurHandler} />
                <span className={classes.dicription}>Введите точку калибровки</span>
            </div>
            <div>
                <div className={classes.input}>
                    Результат калибровки:
                </div>
                <Result calibrationResult={calibrationResult}/>
            </div>
            <Button title={'Создать свидетельство'} onClick={createCertificateHandler}  classes={classes.createCertificate}/>
        </div>
    )
}