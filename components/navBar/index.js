import React from 'react'
// import Container from '@material-ui/core'
import cls from './navBar.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        // <Container>
        <div>
            <div className={cls.container}>
                <div className={cls.leftSide}>
                    <div className={cls.leftContainer}>
                        <Link href="/">
                           <a>
                               <img src="images/onesoilblog.svg" alt=""/>
                           </a>
                        </Link>
                    </div>
                </div>
                <div className={cls.centerSide}>
                    <div className={cls.centerCointainer}>
                        <ul className={cls.list}>
                            <li className={cls.listItem}>
                                <Link href="/">
                                    <a className={cls.navName}>
                                        Мониторинг полей
                                    </a>                                
                                </Link>
                            </li>
                            <li className={cls.listItem}>
                               <Link href="/">
                                    <a className={cls.navName}>
                                    Эксперименты
                                    </a>                                
                                </Link>
                            </li>
                            <li className={cls.listItem}>
                              <Link href="/">
                                    <a className={cls.navName}>
                                    Истории фермеров
                                    </a>                                
                                </Link>
                            </li>
                            <li className={cls.listItem}>
                                 <Link href="/">
                                    <a className={cls.navName}>
                                    Большие данные
                                    </a>                                
                                </Link>
                            </li>
                            <li className={cls.listItem}>
                                 <Link href="/">
                                    <a className={cls.navName}>
                                    @OneSoil
                                    </a>                                
                                </Link>
                            </li>
                            <li className={cls.listItem}>
                                <Link href="/">
                                    <a className={cls.navName}>
                                    О нас
                                    </a>                                
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        // </Container>
    )
}
