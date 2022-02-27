import style from './Skills.module.css'
import {Skill} from "./Skill/Skill";


const ts ='https://iconape.com/wp-content/png_logo_vector/typescript.png'
const react= 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
    const redux= 'https://cdn.iconscout.com/icon/free/png-256/redux-283024.png'
export const Skills = () => {
    return (
        <div style={{backgroundColor: "#678999"}}>
            <div className={style.container}>
                <h2 className={style.mySkill}>My Skills</h2>
            </div>
            <div className={style.ability}>
               <Skill name={'React'} img={react}/>
               <Skill name={'Redux'} img={redux}/>
               <Skill name={'TypeScript'} img={ts}/>
            </div>
        </div>
    )
}