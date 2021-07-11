import React from 'react'
import s from './Result.module.css'
import { useSelector } from 'react-redux'
import { getHitsSelector, getMissesSelector, getNameSelector } from '../store/selectors'

export const Result = () => {

    const name = useSelector(getNameSelector)
    const hits = useSelector(getHitsSelector)
    const misses = useSelector(getMissesSelector)

    return (
        <section className={s.wrapper}>
            <div className={s.text}>
                <span>{`${name} - молодец!`}</span>
            </div>
            <div className={s.tableWrapper}>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan={2}>Результаты испытания</th>
                        </tr>
                        <tr>
                            <td>
                                Выполненно верно
                            </td>
                            <td>
                                {hits}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Выполненно не верно
                            </td>
                            <td>
                                {misses}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}