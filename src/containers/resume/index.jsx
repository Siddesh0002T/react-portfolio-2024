import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';
import { data } from "./util";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";

const Resume=()=>{
    return(
        <section id="resume" className="resume">

        <PageHeaderContent
        headerText = "My Resumes"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="timeline">
            <div className="timeline__experience">
                <h3 className="timeline__experience__header-text">
                    Experience
                </h3>
                <VerticalTimeline 
                layout={'1-column'}
                lineColor="var(--purple-theme-main-color)"
                >
                    {
                        data.experience.map((item, i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertical-timeline-element"
                            contentStyle={{
                                background: 'none',
                                color: 'var(  --purple-theme-sub-text-color)',
                                border:'1.5px solid var( --purple-theme-main-color)'
                            }}
                            date="2024 - Present"
                            icon={<MdWork/>}
                            iconStyle={{
                                background : 'var(--purple-theme-nav-background-color )' ,
                                color: 'var( --purple-theme-main-color)'
                            }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                        {item.title}
                                    </h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        {item.subTitle}
                                    </h4>
                                   
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description">
                                        {item.description}
                                    </p>

                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
            <div className="timeline__education">
                <h3 className="timeline__education__header-text">
                    Education
                </h3>
                <VerticalTimeline 
                layout={'1-column'}
                lineColor="var(--purple-theme-main-color)"
                >
                    {
                        data.education.map((item, i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__education__vertical-timeline-element"
                            contentStyle={{
                                background: 'none',
                                color: 'var(  --purple-theme-sub-text-color)',
                                border:'1.5px solid var( --purple-theme-main-color)'
                            }}
                            date="2022 - Present"
                            icon={<MdWork/>}
                            iconStyle={{
                                background : 'var(--purple-theme-nav-background-color )' ,
                                color: 'var( --purple-theme-main-color)'
                            }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                        {item.title}
                                    </h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        {item.subTitle}
                                    </h4>
                                   
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description">
                                        {item.description}
                                    </p>

                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    </section>
    ) 
}
export default Resume;