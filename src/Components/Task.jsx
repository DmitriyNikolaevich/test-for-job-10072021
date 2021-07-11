import React from 'react'
import s from './Task.module.css'

export const Task = ({ handleChange, handleBlur, values, errors, touched, taskText, taskName }) => {
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
                className={touched !== undefined && errors ? s.invalid : s.valid}
            />
            </td>
        </tr>
    )
}