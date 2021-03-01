import React from 'react'
import Link from 'next/link'
import cls from './aboutFarm.module.css'


export default function AboutFarm() {
    return (
        <div>
            <div className={cls.container}>
                <div>
                     <h2 className={cls.text}>Истории фермеров. Что там у соседа?</h2>
                     <h2 className={cls.textFarm}>Как фермеры и агроконсультанты решают свои задачи при помощи OneSoil</h2>
                </div>
                <div className={cls.imgCard}>
                    <div className={cls.textPhoto}>
                        <img src="images/badge_14_ru.webp" alt=""/><br/>
                        <Link href="/">
                            <a>
                            В Турции: семейный <br/> бизнес и планирование <br/> урожайности по NDVI
                            </a>
                        </Link>
                        <p>10 минут · Ру · En</p>
                    </div>
                    <div className={`${cls.textPhoto} ${cls.text3}`} >
                        <img src="images/portrait_2_1.webp" alt=""/><br/>
                        <Link href="/">
                            <a>
                            В Марокко: проблемы <br/> с ирригацией и скаутинг <br/> полей
                            </a>
                        </Link>
                        <p>7 минут · Ру · En</p>
                    </div>
                    <div className={cls.imgText}>
                        <img src="images/image_6.webp" alt=""/><br/>
                        <Link href="/">
                            <a>
                            В Латвии: <br/> дифференцированное <br/> внесение удобрений
                            </a>
                        </Link>
                        <p>10 минут · Ру · En</p>
                    </div>
                    <div className={cls.imgText}>
                        <img src="images/image_7.webp" alt=""/><br/>
                        <Link href="/">
                            <a>
                            В Украине: борьба <br/> со стереотипами <br/> в агрономии
                            </a>
                        </Link>
                        <p>10 минут · Ру · En</p>
                    </div>
                </div>

        {/*  */}
        <div className={cls.socialNetwork}>
        <div className={cls.signIn}>
            <div className={cls.signText}>Не пропускайте новые статьи — <br/> подпишитесь на нашу рассылку!</div>
           <div className={cls.flex}>
           <input placeholder="Ваш e-mail" type="text"/>
            <label htmlFor="email"></label>
            <button>Получать статьи</button>
           </div>
        </div>
        <div className={cls.fb}>
            <div className={cls.fbText}>Читайте нас <br/> в социальных сетях</div>
            <img  className={cls.svgTw} src="images/twitter_icon.svg" alt=""/>
            <img  className={cls.svgFb} src="images/fb_icon.svg" alt=""/>
        </div>
        </div>
            </div>
        </div>
    )
}
