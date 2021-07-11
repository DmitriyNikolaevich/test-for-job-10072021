import React from 'react'
import { useSelector } from 'react-redux'
import { getHitsSelector } from '../store/selectors'
import s from './Task.module.css'

export const Task = ({ handleChange, handleBlur, values, errors, touched, taskText, taskName, showResult, taskID }) => {

    const id = useSelector(getHitsSelector).filter(item => item === taskID)
    
    return (
        <tr className={s.wrapper}>
            <td>
            <span>{taskText}</span>
            </td>
            <td>
            <input
                type="text"
                name={taskName}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values}
                className={showResult ? !id.length  ? s.invalid : s.valid : s.input}
            />
            </td>
            <td>
                {errors && touched && errors}
            </td>
        </tr>
    )
}