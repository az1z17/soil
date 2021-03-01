import React from 'react'
import cls from './blogUs.module.css'
import Link from 'next/link'
import {VscSearch} from 'react-icons/vsc'

export default function BlogUs() {
    return (
        <div>
            <div className={cls.container}>
                <div className={cls.text}>
                    <h2>Нравится больше смотреть и слушать?</h2>
                </div>
                <div className={cls.card}>
                    <div className={`${cls.cardBody} ${cls.blackCard}`}>
                        <div className={cls.cardDetail}>
                            <p className={cls.season}>1 сезон · 3 эпизода</p>
                            <h1 className={cls.cardText}>Подкаст о точном земледелии</h1>
                            <h2 className={cls.cardComment}>Обсуждаем, почему инновацииb <br/>в сельское хозяйство приходят медленно и можно ли создать идеальное агроприложение.</h2>
                            <button className={cls.listenBtn}>Слушать в комбайне</button>
                        </div>
                        <div className={`${cls.photoCard} ${cls.cardPhoto}`}>
                            <img src="images/2-5.webp" alt=""/>
                        </div>
                    </div>
                    <div className={`${cls.cardBody} ${cls.whiteCard}`}>
                        <div className={cls.cardDetail}>
                            <p className={cls.season}>5 выпусков</p>
                            <h1 className={cls.cardText}>Вебинары <br/> от команды OneSoil</h1>
                            <h2 className={cls.cardComment}>Рассказываем, почему<br/>на поле всегда то густо, то пусто и как это исправить с помощью наших приложений.</h2>
                            <button className={cls.seeBtn}>Смотреть после уборки</button>
                        </div>
                        <div className={`${cls.photoCard} ${cls.imagCard2}`}>
                            <img src="images/3-15.webp" alt=""/>
                        </div>
                    </div>
                </div>

                <div className={cls.search}>
                    <VscSearch className={cls.iconSearch}/>
                    <input  placeholder="Что вы ищете?" type="text"/>
                    <label htmlFor="filter">
                        
                    </label>
                    <button>Найти</button>
                </div>
{/* /////// */}
                <div className={cls.deamondDetail}>
                     <div className={cls.analysis}>
                        <Link href="/">
                            <a className={cls.anlText}>
                            Полевые эксперименты
                            </a>
                        </Link> <br/>
                         <Link href="/">
                            <a className={cls.text2}>
                             Почему <br/> агрохимический<br/>анализ проводить<br/> не обязательно?
                             </a>
                         </Link> <br/>
                         <p>7 минут · Русский · English</p>
                     </div>

                     {/*  */}
                     <div className={cls.crystal}>
                       <div className={cls.diamond}>
                             <div className={cls.zoomText}>
                                <h2>Можно ли увеличить урожайность <br/> на дифферинцированном посеве?</h2>
                                <h2 className={cls.textLess}>Публикуем результаты наших экспериментов</h2>
                            </div>
                             <div className={cls.imageDiamond}>
                                 <img src="images/Imiq.gif" alt=""/>
                             </div>
                        </div> 
                        <hr/> 

                        <div className={cls.comments}>

                        <div>
                            <Link href="/">
                                <a className={cls.experienceText}>Эксперимент с подсолнечником <br/> на чернозёмных почвах</a>
                            </Link>  
                            <p>15 минут · Ру · En</p>  
                            <Link href="/">
                                <a className={cls.experienceText}>Эксперимент с подсолнечником <br/>на каштановых почвах</a>
                            </Link>  
                            <p>15 минут · Ру · En</p>  
                        </div>  
                        <div className={cls.ml}>
                            <Link href="/">
                                <a className={cls.experienceText}>Эксперимент с гибридами <br/> кукурузы</a>
                            </Link>  
                            <p>15 минут · Ру · En</p>  
                            <Link href="/">
                                <a className={cls.experienceText}>Эксперимент с соей</a>
                            </Link>  
                            <p>9 минут · Ру · En</p>  
                        </div>         
                      
                        </div>
                        <Link href="/">
                            <a className={cls.moreText}>Ещё эксперименты</a>
                        </Link>
                     </div>
                </div>
            
            </div>
        </div>
    )
}
