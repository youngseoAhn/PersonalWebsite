import React from 'react';
import '../Components.css';

const ProjectDeploy = () => {
    return (
        <div>
            <div className='time-container'>
                <p className='jobName'><span className='highlight'>Terrestrious EarthQuest</span></p>
                <p className='time'>OCT - DEC 2023</p>
            </div>

            <p className='techTitle'>
                PHP, JAVASCRIPT, HTML/CSS, SQL, Ampps, MyPHPAdmin
            </p>

            <p className='projectContent'>
                Terrestrious Earthquest is a website I developed during my internship,
                featuring a login page, account validation process, styling, session handling, 
                a homepage, and a leaderboard that displays user rankings based on scores
                from the database. This was coded to enable users to create accounts and log in
                during the Scavenger Hunter event, allowing them to view the homepage and 
                leaderboard statuses.
            </p>

            <div className='image-line'>
                 <img src='/Phone1.png' alt='phoneImage' className='catPic'></img>
                 <img src='/Reponsive.png' alt='tabletImage' className='catPic'></img>
                 <img src='/home.png' alt='homePage' className='catPic'></img>
            </div>
            
            <div className='time-container'>
                <p className='jobName'><span className='highlight'>MBTI Tester and Cat Matcher</span></p>
                <p className='time'>Nov 2023</p>
            </div>

            <p className='techTitle'>
                React, JavaScript, HTML/CSS
            </p>

            <p className='projectContent'>
                "This website, built on React, was created as a learning project to explore React 
                functionalities. It's designed primarily for mobile screens and involves crafting 
                components along with a bit of useState. The site functions as a test platform, where
                users respond to a series of questions, and based on their answers, it reveals their 
                MBTI personality type. Following the MBTI result, the website showcases a selection of
                cat photos and descriptions that align with the user's personality traits. It's an engaging
                way to combine personality insights with the charming world of cats."
            </p>
            <div className='image-line'>
                 <img src='/Result1.png' alt='cat' className='catPic'></img>
                 <img src='/Result2.png' alt='cat' className='catPic'></img>
                 <img src='/Result3.png' alt='cat' className='catPic'></img>
            </div>

            <div className='time-container'>
                <p className='jobName'><span className='highlight'>Android App Developer Intern</span></p>
                <p className='time'>Jun - Aug 2023</p>
            </div>

            <p className='techTitle'>
                Android Studio, Kotlin
            </p>

            <p className='projectContent'>
                During my internship, I engaged in an Android app development project that focused 
                on providing location-based services. Throughout this process, I primarily used 
                Kotlin and Android Studio, which enabled me to gain fundamental knowledge and skills
                in Android development. My responsibilities included designing and coding the loading
                screen, as well as implementing functionality for accessing location data and calculating
                distances. This experience was pivotal in acquiring basic Android development skills
                through hands-on practice with Kotlin.
            </p>

            <div className='time-container'>
                <p className='jobName'><span className='highlight'>Personal Website</span></p>
                <p className='time'>Dec 2023</p>
            </div>
            
            <p className='techTitle'>
                React, JavaScript, HTML/CSS
            </p>

            <p className='projectContent'>
                <div className='gapCreate'>
                  The website you are currently viewing is my personal creation, crafted in the style
                   of a resume and based on React. It's designed with a fixed left panel, while the right 
                  side allows for scrolling to explore the content. This layout provides a seamless and 
                  intuitive user experience, showcasing my skills and work in a structured yet dynamic manner.
                </div>
            </p>
        </div>
    )
}

export default ProjectDeploy;