import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';


export type ResultType = {
    id: string
    calibrationDot: number
    testVoltage: string
    calibrationMiddleValue: number
    error: number
    permissibleValue: number 
    expandedUncertainty: number 
    probability: number
    coefficient: number
}


const initialState: ResultType[] = [{
    id: v1(),
    calibrationDot: 1,
    testVoltage: '500 B',
    calibrationMiddleValue: 1,
    error: 0.5,
    permissibleValue: 1, //допуск
    expandedUncertainty: 1, //расширенная неопределённость
    probability: 95,
    coefficient: 1.65
}]


const slice = createSlice({
    name: 'result',
    initialState: initialState,
    reducers: {
      addCalibrationResultAC(state, action: PayloadAction<{calibrationResult: ResultType}>){
        state.push(action.payload.calibrationResult)

      }
    },
})


export const ResulttReducer = slice.reducer


export const {addCalibrationResultAC} = slice.actions
