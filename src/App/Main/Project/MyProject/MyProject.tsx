
import style from './MyProject.module.css'


type MyProjectType ={
    img: string
    name: string
}



export const MyProject =(props: MyProjectType) => {
    return (
        <div >
            <img src={props.img} alt={'img'} className={style.img}/>
            <div>{props.name}</div>
        </div>
    )
}