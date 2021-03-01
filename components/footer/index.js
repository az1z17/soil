import React from 'react'
import cls from './footer.module.css'


export default function Footer() {
    return (
        <div>
            <div className={cls.container}>
                <hr/>
                <div className={cls.text}>© 2018–2021 OneSoil</div>
            </div>
        </div>
    )
}
