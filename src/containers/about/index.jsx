import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';
import { Animate } from "react-simple-animate";
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';
const personalDetails = [
    {
        label: "Name",
        value: "Siddhesh More"
    },
    {
        label: "Age",
        value: "18"
    },{
        label: "Email",
        value: "siddeshmore145@gmail.com"
    },
    {
        label: "Contact No",
        value: "+91 9527024172"
    }
];

const jobSummary = 'Innovative and detail-oriented Front End Developer with 4 years of experience in designing and developing user interfaces, testing, debugging, and ensuring a seamless user experience. Proficient in HTML, CSS, JavaScript, and modern frameworks like React, Angular, or Vue.js. Adept at collaborating with designers and backend developers to create responsive, high-performance web applications. Committed to staying current with the latest technologies and best practices in front-end development.Skilled and results-driven Back End Developer with 2 years of experience in designing, developing, and maintaining server-side applications. Proficient in server-side languages such as Node.js, Python, Ruby, Java, or PHP, and experienced with database management using MySQL, PostgreSQL, or MongoDB. Expertise in building robust APIs, integrating front-end elements, and implementing security and data protection measures. Strong problem-solving abilities and a passion for delivering high-quality, scalable applications.';

const About=()=>{
    return(
        <section id="about" className="about">

            <PageHeaderContent
            headerText = "About Me"
            icon={<BsInfoCircleFill size={40}/>}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
                transform: 'translateX(-900px)'
            }}
            end={{
                transform: 'translateX(0px)'
            }}
            >
                <h3>Front End And Back End Developer</h3>
                <p>{jobSummary}</p>
            </Animate>
            <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
                transform: 'translateX(500px)'
            }}
            end={{
                transform: 'translateX(0px)'
            }}
            >
            <h3 className="personalInformationHeaderText">personal Information</h3>
            <ul>
                {
                    personalDetails.map((item, i) => (
                        <li key={i}> 
                         <span className="title">{item.label}</span>
                         <span className="value">{item.value}</span>
                        </li>
                    ))
                }
            </ul>
            
            </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
                transform: 'translateX(650px)'
            }}
            end={{
                transform: 'translateX(0px)'
            }}
            >
                    <div className="about__content__personalWrapper__servicesWrapper__innerContent">
                    <div>
                    <DiAndroid size={60} color="var(--purple-theme-main-color)"/>
                    </div>
                    <div>
                    <FaDev size={60} color="var(--purple-theme-main-color)"/>
                    </div>
                    <div>
                    <DiApple size={60} color="var(--purple-theme-main-color)"/>
                    </div>
                    <div>
                    <FaDatabase size={60} color="var(--purple-theme-main-color)"/>
                    </div>
                    </div>
                </Animate> 
                </div>
            </div>
        </section>
    )
}
export default About; 