import React from 'react'
import cls from './infOsoil.module.css'
import Link from 'next/link'

export default function InfOnesoil() {
    return (
        <div>
           <div className={cls.detail}>
               <h2 className={cls.okey}>Окей, точное земледелие. <br/>С чего начать?</h2>
                <div className={cls.artBoard}>
                    
                    <div className={cls.elem}>
                        <Link href="/">
                            <a>
                            <img src="images/cover_3.webp" alt=""/>
                            </a>
                        </Link>
                        <Link className={cls.exText} href="/">
                          <a className={cls.experience}>Мониторинг полей</a>
                        </Link> <br/>
                        <Link href="/">
                            <a className={cls.ukrText}>Что такое точное земледелие и как начать его использовать</a>
                        </Link>
                        <p className={`${cls.data} ${cls.mb}`}>14 декабря 2018 · 6 минут · Русский · English</p>
                    </div>
                    <div className={cls.elemText}>
                        <div className={cls.popular}>
                            <h1>В ту же копилку ✨</h1>
                            <hr/>
                        </div>
                        <div className={cls.monitor}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>Мониторинг полей</a>
                            </Link> <br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>Что такое индекс NDVI и как <br/> он делает жизнь фермера <br/> проще</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>6 минуты · Ру · En</a>
                            </Link>
                        </div>
                        <div className={cls.space}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>@OneSoil</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>Как следить за состоянием  <br/> полей откуда угодно <br/> и бесплатно</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>4 минуты · Ру · En</a>
                            </Link>
                        </div>
                        <div className={cls.space}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>Мониторинг полей</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>Проблемы точного земледелия <br/> и как с ними жить</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>3 минуты · Ру · En</a>
                            </Link><br/>
                        </div>
                        <div className={cls.space}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>Эксперименты</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>Датчик OneSoil: что умеет наша <br/> беспроводная метеостанция</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>4 минуты · Ру · En</a>
                            </Link><br/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
