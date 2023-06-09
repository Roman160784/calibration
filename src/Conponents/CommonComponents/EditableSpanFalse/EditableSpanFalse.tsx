import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import st from './editableSpan.module.css'


type EditableSpanPropsType = {
title: string
changeTitle: (title: string) => void
}

export const EditableSpanFalse = ({title, changeTitle ,...props}: EditableSpanPropsType) => {

 const [value, setValue] = useState(title)
 const [mode, setEditMode] = useState <boolean>(true)

 const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    
    setValue(e.currentTarget.value)   
}

const onBlurHandler = () => {
    if(value.trim() !== ''){
        changeTitle(value)
        setEditMode(true)
    } 
}

const onKeyPresHandler = (e: KeyboardEvent <HTMLInputElement>) => {
    if(e.key === 'Tab'){
        setEditMode(false)
    }
}

const onDoubleClickHandler = () => {
    setEditMode(true)
}
    return  mode
            ?<input className={st.inputSpan} type="text" value={value} onKeyDown={onKeyPresHandler} 
            onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus/>
            : <span className={st.text} onDoubleClick={onDoubleClickHandler}>{title}</span>
            
}