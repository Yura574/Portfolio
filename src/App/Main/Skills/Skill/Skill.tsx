import style from './Skill.module.css'



type SkillType = {
    name: string
    img: string
}
export const Skill = (props: SkillType) => {
    return <div className={style.container}>
        <h3>
            {props.name}
        </h3>
        <div>
           <img src={props.img} alt={'react'} className={style.imgSkill}/>
        </div>
    </div>
}