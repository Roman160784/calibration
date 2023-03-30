import React from 'react';


type ButtonType = {
classes : string
title: string
onClick : () => void

}

export const Button = React.memo( ({classes, title, onClick, ...props}: ButtonType) => {
    return(
        <button className={classes} onClick={onClick}>{title}</button>
    )
})