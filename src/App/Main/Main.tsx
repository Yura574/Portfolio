import styleCommon from "../Common/Common.module.css";
import {AboutMe} from "./AboutMe/AboutMe";
import {Skills} from "./Skills/Skills";
import {Project} from "./Project/Project";
import {Contact} from "./Contacts/Contact";


export const Main = () => {
    return (
        <div className={styleCommon.wrapper}>
            <AboutMe/>
            <Skills/>
            <Project/>
            <Contact/>

        </div>
    )
}
