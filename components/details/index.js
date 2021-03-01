import React from 'react'
import cls from './details.module.css'
import Link from 'next/link'

export default function Details() {
    return (
        <div>
           <div className={cls.detail}>
                <div className={cls.artBoard}>
                    <div className={cls.elem}>
                        <Link href="/">
                            <a>
                            <img className={cls.pictureLogo} src="images/18022021_featuring_d.webp" alt=""/>
                            </a>
                        </Link>
                        <Link className={cls.exText} href="/">
                          <a className={cls.experience}>Эксперименты</a>
                        </Link> <br/>
                        <Link href="/">
                            <a className={cls.ukrText}>Эксперимент по диф.посеву гибридов <br/> кукурузы в Украине</a>
                        </Link>
                        <p className={`${cls.data} ${cls.mb}`}>18 февраля · Русский · English</p>
                    </div>
                    <div className={cls.elemText}>
                        <div className={cls.popular}>
                            <h1>Популярное ❤️</h1>
                            <hr/>
                        </div>
                        <div className={cls.monitor}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>Мониторинг полей</a>
                            </Link> <br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>Что такое индекс NDVI и как он делает жизнь фермера проще</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>4 минуты · Ру · En</a>
                            </Link>
                        </div>
                        <div className={cls.space}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>@OneSoil</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>15 лучших YouTube-каналов <br/> для фермеров</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>6 минуты · Ру · En</a>
                            </Link>
                        </div>
                        <div className={cls.space}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>Мониторинг полей</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>Как следить за состоянием полей в приложении OneSoil Scouting</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>4 минуты · Ру · En</a>
                            </Link><br/>
                        </div>
                        <div className={cls.space}>
                            <Link href="/">
                                <a className={`${cls.monitorText} ${cls.mt}`}>Эксперименты</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.infText} ${cls.mt2}`}>Как мы рассчитываем азотные удобрения</a>
                            </Link><br/>
                            <Link href="/">
                                <a className={`${cls.data} ${cls.mt3}`}>7 минуты · Ру · En</a>
                            </Link><br/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
