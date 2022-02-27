import avatar from './../../Common/images/tPxrEgJI8z0.jpg'
import style from './AboutMe.module.css'


export const AboutMe = () => {
    return (
        <div className={style.container}>

            <div>
                <img src={avatar} alt={'ava'} className={style.avatar}/>
            </div>
            <div className={style.info}>
                <h2>About me</h2>
                <h1>Yura Sergeev</h1>
                <div>
                    <div>
                        My name is Yura Sergeev. I am Frontend Developer,
                        and I'm very passionate and dedicated to my work.
                    </div>
                    <div>
                        With 20 years experience as a professional Web developer,
                        I have acquired the skills and knowledge necessary to make your project a success.
                        I enjoy every step of the design process, from discussion and collaboration.
                    </div>
                    <button> Learn More</button>
                </div>
            </div>
        </div>
    )
}