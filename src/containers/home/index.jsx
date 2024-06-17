import React from "react";
import './styles.scss'
import { useNavigate } from "react-router-dom";
import {Animate} from 'react-simple-animate';
const Home=()=>{

    const navigate = useNavigate();
 
    const handleNavigateToContactMePage =()=>{
        navigate('/contact');
    }

    return(
        <section className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Siddhesh More.
                    <br />
                    Front-End And Back-End Devloper
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform: 'translateY(550px)'
            }}
            end={{
                transform: 'translateY(0px)'
            }}
            >
            <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire</button>

                </div> 
            </Animate>

        </section>
    )
}
export default Home; 