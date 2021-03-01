import React from 'react'
import cls from './news.module.css'
import Link from 'next/link'

export default function News() {
    return (
        <div className={cls.news}>
             <div className={cls.container}>
                <h1 className={cls.newText}>Новое ✨</h1>
                <div className={cls.newContent}> 
                <div className={cls.mt}>
                    <Link href="/">
                        <a>
                            <img src="images/18022021_latest_1-2.webp" alt=""/>
                        </a>
                    </Link><br/>
                    <Link href="/">
                        <a className={cls.farm}>
                        Истории фермеров
                        </a>
                    </Link> <br/>
                    <Link href="/">
                        <a className={cls.bounceText}>
                        «Прибыль при посеве с <br/> переменной нормой — <br/> $36 с гектара» 
                        </a>
                    </Link><br/>
                    <p className={cls.timeText}>10 минут · Ру · En</p>
                </div>
                <div className={cls.mt}>
                    <Link href="/">
                        <a>
                            <img src="images/18022021_latest_2-2.webp" alt=""/>
                        </a>
                    </Link><br/>
                    <Link href="/">
                        <a className={cls.farm}>
                        @OneSoil
                        </a>
                    </Link><br/>
                    <Link href="/">
                        <a className={cls.bounceText}>
                        4,5% всех полей мира и <br/> пользователи из Аляски. <br/> Итоги 2020 от OneSoil
                        </a>
                    </Link><br/>
                    <p className={cls.timeText}>10 минут · Ру · En</p>
                </div>
                <div className={cls.mt}>
                    <Link href="/">
                        <a>
                            <img src="images/18022021_latest_3-2.webp" alt=""/>
                        </a>
                    </Link><br/>
                    <Link href="/">
                        <a className={cls.farm}>
                        Эксперименты
                        </a>
                    </Link><br/>
                    <Link href="/">
                        <a className={cls.bounceText}>
                        Как с помощью полевого <br/> опыта сократить расходы <br/> на семена пшеницы на <br/> 50%?
                        </a>
                    </Link><br/>
                    <p className={cls.timeText}>10 минут · Ру · En</p>
                </div>
                <div className={cls.mt2}>
                    <h1>Не пропустите новые <br/> статьи. Подпишитесь <br/> на нашу рассылку!</h1>
                    <form>
                        <input type="text" placeholder="Your e-mail"/>
                        <label htmlFor="email"></label>
                        <button>Получать статьи</button>
                    </form>
                </div>
                </div>
            </div>           
        </div>
    )
}
