import {MyProject} from "./MyProject/MyProject";
import style from './Project.module.css'

const firstProject ='https://waxon.ibthemespro.com/img/2.9207e75e.jpg'
const secondProject = 'https://waxon.ibthemespro.com/img/3.b6b7ad1d.jpg'
const thirdProject = 'https://waxon.ibthemespro.com/img/6.951cc0d8.jpg'

export const Project = () => {
    return (
        <div className={style.container}>
            <div className={style.project}>
                <h2>My Projects</h2>
            </div>
            <div className={style.containerProject}>
                <MyProject img={firstProject} name={'Social Network'}/>
                <MyProject img={secondProject} name={'Todolist'}/>
                <MyProject img={thirdProject} name={'Todolist'}/>
            </div>

        </div>
    )
}