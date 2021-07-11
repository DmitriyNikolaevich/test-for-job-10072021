import { Formik } from 'formik'
import React from 'react'
import s from './Tasks.module.css'
import { useDispatch } from 'react-redux'
import { setHitAC, setMissesAC } from '../store/mainReducer'
import { Task } from './Task'
import { Result } from './Result'
import { useState } from 'react'

export const Tasks = () => {

    const dispatch = useDispatch()

    const [showResult, setShowResult] = useState(false)

    const arrMod = () => {

        let array = []

        for (let index = 1, operation = '', arg1 = 0, arg2 = 0, answer = 0; index <= 10; index++) {

            arg1 = Math.ceil(Math.random() * 100)

            arg2 = Math.ceil(Math.random() * 100)

            switch (Math.ceil(Math.random() * 4)) {
                case 1:
                    operation = '/'
                    answer = arg1 / arg2
                    break;

                case 2:
                    operation = '*'
                    answer = arg1 * arg2
                    break;

                case 3:
                    operation = '-'
                    answer = arg1 - arg2
                    break;

                case 4:
                    operation = '+'
                    answer = arg1 + arg2
                    break;
            
                default:
                    break;
            }
            array.push({
                id: `task${index}`,
                arg1,
                arg2,
                operation,
                answer
            })
        }
        return array
    }

    const arr = arrMod()
    
    return (
        <section className={s.wrapper}>
            <h1>Сражайся как лев!</h1>
            {arr.length &&
            <Formik
                initialValues={{ task1: '', task2: '', task3: '', task4: '', task5: '', task6: '', task7: '', task8: '', task9: '', task10: '' }}
                validate={values => {
                    const errors = {}
                    for (const key in values) {
                        if (Object.hasOwnProperty.call(values, key)) {
                            if (!values[key]) {
                                errors[key] = 'Введите значение'
                            } else if (
                                !/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/i.test(values[key])
                            ) {
                                errors[key] = 'Значение должно быть числом'
                            }
                        }
                    }
                    return errors
                }}
                onSubmit={(values) => {
                        let hits = [], misses = []
                        for (const key in values) {
                            if (Object.hasOwnProperty.call(values, key)) {
                                Number(values[key]) === arr.filter(item => item.id === key)[0].answer 
                                                                    ? hits.push(key) 
                                                                    : misses.push(key)
                            }
                        }
                        dispatch(setHitAC(hits))
                        dispatch(setMissesAC(misses))
                        setShowResult(true)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <table>
                            {arr.map(task => <Task handleChange={handleChange}
                                                     handleBlur={handleBlur}
                                                     values={values[task.id]}
                                                     errors={errors[task.id]}
                                                     touched={touched[task.id]}
                                                     taskText={`${task.arg1} ${task.operation} ${task.arg2}`}
                                                     taskName={task.id}
                                                     showResult={showResult}
                                                     taskID={task.id}
                                                     key={task.id}
                                                    />)}
                            </table>
                            <button type="submit" hidden={showResult}>
                                Далее
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
            }
        {showResult && <Result />}
        </section>
    )
}