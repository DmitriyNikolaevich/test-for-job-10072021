import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { setNameAC } from '../store/mainReducer'
import s from './Entrance.module.scss'
import { useHistory } from 'react-router'

export const Entrance = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    let invalidStatus = false

    return (
        <section>
            <h1>Назови себя!</h1>
            <Formik
                initialValues={{ name: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        invalidStatus = true
                    } else {
                        invalidStatus = false
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                        if (invalidStatus) {
                            alert("Введи свое имя, герой!")
                        } else {
                            dispatch(setNameAC(values.name))
                            history.push('/tasks')
                        }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={`${s.field} ${invalidStatus && s.invalid}`}
                        />
                        {errors.name && touched.name && errors.name}

                        <button type="submit" className={s.button}>
                            К задачам!
                        </button>
                    </form>
                )}
            </Formik>
        </section>
    )
}