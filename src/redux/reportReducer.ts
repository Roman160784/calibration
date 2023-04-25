import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

type CalibrationConditionsType = {
    id: string
    temperature: string
    relativeHumidity: string
    pressure: string
    supplyVoltage: string
    frequency: string
}

type StandatdType = {
    id: string
    standardName: string
    standardType: string
    standardNumber: string
    calibrationDate: string
}

export type ReportType = {
    id: string
    reportNumber: string
    calibrationObject: string
    serialNumber: string
    application: string
    customer: string
    adresCustumer: string
    calibrarionPlace: string
    calibrationDate: string
    method: string
    calibrationConditions: CalibrationConditionsType
    standard: StandatdType
    stigma: string
    boss: string
    engineer: string
}

const initialState: ReportType = {
    id: v1(),
    reportNumber: '83/23/2160к',
    calibrationObject: 'Мегаомметр ЭС0202/2-Г',
    serialNumber: '1111',
    application: 'Заявка на калибровку № 001341 от 13.01.2023',
    customer: 'РУП "Гомельэнерго"',
    adresCustumer: '246028, г Гомель ул. Головацкого 19/212',
    calibrarionPlace: 'государственное предприятие "Гомельский ЦСМС"',
    calibrationDate: '11.11.2023',
    method: 'МК.ГМ 1580 - 2013, Метод прямых измерений',
    stigma: 'BY00045',
    boss: 'Д. В. Миранович: Начальник сектора ЭМиР ',
    engineer: " Р. С. Матвеенко: Инженер по метрологии I к",
    calibrationConditions: {
        id: v1(),
        temperature: '21,0',
        relativeHumidity: '31,8',
        pressure: '100,1',
        supplyVoltage: '228',
        frequency: '50'
    },
    standard: {
        id: v1(),
        standardName: 'Мера-имитатор',
        standardType: 'Р40116',
        standardNumber: '090',
        calibrationDate: '11.2022'
    }
}


const slice = createSlice({
    name: 'report',
    initialState: initialState,
    reducers: {
        changeReportParameterAC(state, action: PayloadAction<{ key: string, parameter: string}>){
            const coppy = {...state, [action.payload.key] : action.payload.parameter }
            state = coppy
            return state
        },
        changeCalibrationConditionsAC(state, action: PayloadAction<{ key: string, parameter: string}>){
            const coppy = {...state.calibrationConditions, [action.payload.key] : action.payload.parameter}
            state.calibrationConditions = coppy
            return state
        },
        changeCalibrationStandatdAC(state, action: PayloadAction<{ key: string, parameter: string}>){
            const coppy = {...state.standard, [action.payload.key] : action.payload.parameter}
            state.standard = coppy
            return state
        }
    },
})


export const ReportReducer = slice.reducer


export const {changeReportParameterAC, changeCalibrationConditionsAC, changeCalibrationStandatdAC} = slice.actions
