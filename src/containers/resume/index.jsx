import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';


const Resume=()=>{
    return(
        <section id="resume" className="resume">

        <PageHeaderContent
        headerText = "My Resumes"
        icon={<BsInfoCircleFill size={40}/>}
        />

    </section>
    )
}
export default Resume;