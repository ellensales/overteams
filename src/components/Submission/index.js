import './Submission.css'
import { useState } from 'react'

export const Submission = (props) => {
    
    const onTyped = (e) => {
        props.onModified(e.target.value)
    }

    return (
        <div className='submission'>
            <input value = {props.value} onChange={onTyped} placeholder={props.placeholder}/>
        </div>


    );
    
}