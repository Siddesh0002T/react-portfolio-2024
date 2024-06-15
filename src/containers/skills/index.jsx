import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';


const Skills=()=>{
    return(
        <section id="skills" className="skills">

        <PageHeaderContent
        headerText = "My Skills"
        icon={<BsInfoCircleFill size={40}/>}
        />

    </section>
    <h1>HELLO </h1>
    )
}
export default Skills;