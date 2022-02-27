
import styleCommon from './../Common/Common.module.css'
import style from './Header.module.css'


export const Header = ()=> {
    return (
        <div className={`${styleCommon.wrapper} ${style.position}`}>
            <div className={style.header}>
                <nav className={style.nav}>
                    <a href="./">main</a>
                    <a href="./">skills</a>
                    <a href="./">project</a>
                    <a href="./">contact</a>
                </nav>
            </div>
        </div>
    )
}