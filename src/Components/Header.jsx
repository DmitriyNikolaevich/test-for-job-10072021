import React from 'react'
import s from './Header.module.scss'
import restart from '../images/restart.svg'

export const Header = () => {
    return (
        <header className={s.wrapper}>
            <div>
                <span>Test for job</span>
            </div>
            <div>
                <a href="/" ><img src={restart} alt="Restart"></img></a>
            </div>
        </header>
    )
}