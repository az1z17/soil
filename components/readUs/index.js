import React from 'react'
import cls from './readUs.module.css'
import Link from 'next/link'

export default function ReadUs() {
    return (
        <div>
            <div className={cls.container}>
                <h2 className={cls.titleText}>Хотите ещё? Тогда почитайте про OneSoil</h2>
                <div>
                    <div className={cls.photoCard}>
                      <div className={cls.mr}>
                      <img src="images/badge_4.webp" alt=""/>
                        <div className={cls.text}>Как работает магия в <br/> OneSoil: часть о <br/> данных</div>
                      </div>
                        <div className={cls.mr}>
                        <img src="images/11_99FFFF.webp" alt=""/>
                        <div className={cls.text}>Почему платформа <br/> OneSoil бесплатная?</div>
                        </div>
                        <div className={cls.mr}>
                        <img src="images/10_CCFFCC.webp" alt=""/>
                        <div className={cls.text}>60 миллионов полей и <br/> 27 культур. Как мы <br/> делали OneSoil Map</div>
                        </div>
                        <div className={cls.mr}>
                        <img src="images/cover_5_ddfdda_sized.webp" alt=""/>
                        <div className={cls.text}> Кто делает стартап <br/> OneSoil и почему?</div>
                        </div>
                        
                    </div>
                </div>
                <hr/>
                <div className={cls.bodyMap}>
                    
                    <div>
                        <h2 className={cls.h2}>От слов к делу</h2>
                        <div className={cls.textCompany}>Это блог компании <span className={cls.logoText}>OneSoil</span>. Мы не только пишем, <br/> но и делаем бесплатные приложения для фермеров. </div> 
                        <button className={cls.moreInfBtn}>Расскажите подробнее!</button>         
                    </div>
                    <div>
                        <img className={cls.map} src="images/map_cta.webp" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
