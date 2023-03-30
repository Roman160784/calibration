import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import { findInterestDeposit } from '../Utils/findInterestDeposit';
import { findSko } from '../Utils/findSKO';
import { findTotalUncertainty } from '../Utils/findTotalUncertainty';
import { useAppDispatch } from './store';

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

export type CalculationType = {
    id: string
    calibrationDot: number
    testVoltage: string
    dataForCalibration: number[]
    calibrationMiddleValue: number
    sanadardError: number
    userError: number
    uncertaintyMiddle: number
    uncertaintySanadardError: number
    uncertaintyUserError: number
    uncertaintyResult: number
    uncertaintyMiddlePercent: number
    uncertaintySanadardErrorPercent: number
    uncertaintyUserErrorPercent: number
    uncertaintyResultPercent: number
    
}



const initialState:{calculation: CalculationType[], result:ResultType[]} ={calculation: [], result:[]}


const slice = createSlice({
    name: 'calculation',
    initialState: initialState,
    reducers: {
        addCalibrationFieldAC(state, action: PayloadAction<{id: string, value?: number, i?: number, dot: number, array?: number[]}>){

            
            let dataForCalibration = []
            
            if(action.payload.array === undefined) {
                for (let index = 0; index < 10; index++) {
                    dataForCalibration.push(action.payload.dot)
                    
                }
                
            }
            else{
                dataForCalibration = action.payload.array
            }
 

            let testVoltage = '500 B'
            let arrMiddleValue = dataForCalibration.reduce((ak, el) => ak + el) / dataForCalibration.length
            let calibrationMiddleValue = +arrMiddleValue.toFixed(4)
          
            let errorStandardInDot = 0
            let uncertaintySanadardError = 0
            let errorInDot = calibrationMiddleValue - action.payload.dot

            if(action.payload.dot < 10){
                let error = action.payload.dot * 0.02 / 100
                errorStandardInDot = +error.toFixed(5)
                let uncertainty = errorStandardInDot / Math.sqrt(3)
                uncertaintySanadardError = +uncertainty.toFixed(5)
            }else if (action.payload.dot > 10 || action.payload.dot < 100) {
                let error = action.payload.dot * 0.05 / 100
                errorStandardInDot = +error.toFixed(5)
                let uncertainty = errorStandardInDot / Math.sqrt(3)
                uncertaintySanadardError = +uncertainty.toFixed(5)
            }else if (action.payload.dot > 100) {
                let error = action.payload.dot * 0.1 / 100
                errorStandardInDot = +error.toFixed(5)
                let uncertainty = errorStandardInDot / Math.sqrt(3)
                uncertaintySanadardError = +uncertainty.toFixed(5)
            }

            let a = action.payload.dot * 5 / 100
            let userErrorInDot = +a.toFixed(5)
            let b = userErrorInDot / Math.sqrt(3)
            let uncertaintyUserError = +b.toFixed(5)
            
            //расчёт СКО
            let uncertaintyMiddle = findSko(dataForCalibration)
            //

           // расчёт сумарной неопределённости
            let uncertaintyResult = findTotalUncertainty(uncertaintyMiddle, uncertaintySanadardError, uncertaintyUserError)
            //

            // расчёт процентного вклада
            let uncertaintyMiddlePercent = findInterestDeposit(uncertaintyMiddle, uncertaintyResult)
            let uncertaintySanadardErrorPercent = findInterestDeposit(uncertaintySanadardError, uncertaintyResult)
            let uncertaintyUserErrorPercent = findInterestDeposit(uncertaintyUserError, uncertaintyResult) 
            let uncertaintyResultPercent = uncertaintyMiddlePercent + uncertaintyUserErrorPercent + uncertaintySanadardErrorPercent
            //

            let permissibleValue = action.payload.dot * 15 / 100
            let coefficient = 1.65
            

            if (uncertaintyUserErrorPercent > 75 || uncertaintySanadardErrorPercent > 75) {
                    coefficient = 1.65
                } else {
                    coefficient = 2
                }

            let expandedUncertainty = coefficient * uncertaintyResult
                
               let newCalibrationField :CalculationType  = {
                   id: action.payload.id, calibrationDot: action.payload.dot,
                   testVoltage: testVoltage, calibrationMiddleValue, sanadardError: errorStandardInDot,
                   userError: userErrorInDot, uncertaintyMiddle: uncertaintyMiddle, uncertaintySanadardError: uncertaintySanadardError,
                   uncertaintyUserError: uncertaintyUserError, uncertaintyResult: uncertaintyResult,
                   uncertaintyMiddlePercent: uncertaintyMiddlePercent, uncertaintySanadardErrorPercent: uncertaintySanadardErrorPercent,
                   uncertaintyUserErrorPercent: uncertaintyUserErrorPercent, uncertaintyResultPercent: uncertaintyResultPercent,
                   dataForCalibration: dataForCalibration
               }

               let calibrationResult: ResultType = {
                   id: action.payload.id,
                   calibrationDot: action.payload.dot,
                   testVoltage: testVoltage,
                   calibrationMiddleValue: calibrationMiddleValue,
                   error: errorInDot,
                   permissibleValue: permissibleValue,
                   expandedUncertainty: expandedUncertainty,
                   probability: 95,
                   coefficient: coefficient,
               }
               
                state.calculation.push(newCalibrationField)
                state.result.push(calibrationResult)
           
        },
        changeCallibrationValueAC(state, action: PayloadAction<{value: number, id: string, i: number}>){
           
                let st = state.calculation.find(s => s.id === action.payload.id)
                let newDataForCalibration = st?.dataForCalibration.map((el, i) => i === action.payload.i ? el = action.payload.value : el)
                 
                let calibrationDot = st?.calibrationDot
                let testVoltage = st?.testVoltage

                let arrMiddleValue = newDataForCalibration!.reduce((ak, el) => ak + el) / newDataForCalibration!.length
                let calibrationMiddleValue = +arrMiddleValue.toFixed(4)
                
                let errorStandardInDot = 0
                let uncertaintySanadardError = 0
                let errorInDot = calibrationMiddleValue - calibrationDot!
                
                if(st!.calibrationDot < 10){
                    let error = calibrationDot! * 0.02 / 100
                    errorStandardInDot = +error.toFixed(5)
                    let uncertainty = errorStandardInDot / Math.sqrt(3)
                    uncertaintySanadardError = +uncertainty.toFixed(5)
                }else if (calibrationDot! > 10 || st!.calibrationDot < 100) {
                    let error = calibrationDot! * 0.05 / 100
                    errorStandardInDot = +error.toFixed(5)
                    let uncertainty = errorStandardInDot / Math.sqrt(3)
                    uncertaintySanadardError = +uncertainty.toFixed(5)
                }else if (calibrationDot! > 100) {
                    let error = calibrationDot! * 0.1 / 100
                    errorStandardInDot = +error.toFixed(5)
                    let uncertainty = errorStandardInDot / Math.sqrt(3)
                    uncertaintySanadardError = +uncertainty.toFixed(5)
                }

                let a = calibrationDot! * 5 / 100
                let userErrorInDot = +a.toFixed(5)
                let b = userErrorInDot / Math.sqrt(3)
                let uncertaintyUserError = +b.toFixed(5)

                //расчёт СКО
            let uncertaintyMiddle = findSko(newDataForCalibration!)
                //

                // расчёт сумарной неопределённости
            let uncertaintyResult = findTotalUncertainty(uncertaintyMiddle, uncertaintySanadardError, uncertaintyUserError)
                //

                // расчёт процентного вклада
            let uncertaintyMiddlePercent = findInterestDeposit(uncertaintyMiddle, uncertaintyResult)
            let uncertaintySanadardErrorPercent = findInterestDeposit(uncertaintySanadardError, uncertaintyResult)
            let uncertaintyUserErrorPercent = findInterestDeposit(uncertaintyUserError, uncertaintyResult) 
            let uncertaintyResultPercent = uncertaintyMiddlePercent + uncertaintyUserErrorPercent + uncertaintySanadardErrorPercent
                //

                let permissibleValue = calibrationDot! * 15 / 100
                let coefficient = 1.65
            

            if (uncertaintyUserErrorPercent > 75 || uncertaintySanadardErrorPercent > 75) {
                    coefficient = 1.65
                } else {
                    coefficient = 2
                }

            let expandedUncertainty = coefficient * uncertaintyResult

            let newCalibrationField :CalculationType  = {
                id: action.payload.id, calibrationDot: calibrationDot!,
                testVoltage: testVoltage!, calibrationMiddleValue, sanadardError: errorStandardInDot,
                userError: userErrorInDot, uncertaintyMiddle: uncertaintyMiddle, uncertaintySanadardError: uncertaintySanadardError,
                uncertaintyUserError: uncertaintyUserError, uncertaintyResult: uncertaintyResult,
                uncertaintyMiddlePercent: uncertaintyMiddlePercent, uncertaintySanadardErrorPercent: uncertaintySanadardErrorPercent,
                uncertaintyUserErrorPercent: uncertaintyUserErrorPercent, uncertaintyResultPercent: +uncertaintyResultPercent.toFixed(1),
                dataForCalibration: newDataForCalibration!
            }

            let calibrationResult: ResultType = {
                id: action.payload.id,
                calibrationDot: calibrationDot!,
                testVoltage: testVoltage!,
                calibrationMiddleValue: calibrationMiddleValue,
                error: +errorInDot.toFixed(3),
                permissibleValue: +permissibleValue.toFixed(3),
                expandedUncertainty: +expandedUncertainty.toFixed(3),
                probability: 95,
                coefficient: coefficient,
            }

            debugger
           const newCalculationField = state.calculation.map(st => st.id === action.payload.id ? st = newCalibrationField : st)
           const newResultField = state.result.map(r => r.id === action.payload.id ? r = calibrationResult : r)
           state.calculation = newCalculationField
           state.result = newResultField
            
           
            
        }
    }
})

export const CalculationReducer = slice.reducer
    
export const {addCalibrationFieldAC, changeCallibrationValueAC} = slice.actions



