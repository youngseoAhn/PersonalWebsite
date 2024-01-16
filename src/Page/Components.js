import React from 'react';
import './Components.css';
import ExeperienceList from './repeat/experience.js';
import ProjectDeploy from './projectlist/projectLists.js';

export const Left = () => 
{
    return (
        <div className='leftSide'>
            <h1 className='Name'>Youngseo Ahn</h1>
            <p className='Title'>Front-End Developer<br/>UW-Tacoma IT Senior Student</p>
            <p className='Description'>
            Leveraging a background in front-end development, including hands-on experience
            with PHP and JavaScript during an internship, I am a UW-Tacoma student passionate about
            building responsive and user-friendly web interfaces. I am committed to continuous learning
            my skills in dynamic development environments.</p>

            <p className='createdByMe'>
                Resume Created by Youngseo Ahn from University of Washington Tacoma
            </p>
        </div>
    );
};

export const Right = () => {
    return (
        <div className='rightSide'>
            <p className = 'Passion'>During my IT studies, I embarked on a journey in front-end development in my junior year. 
            Starting with the fundamentals of <span className='highlight'>HTML, CSS, and JavaScript,</span> I quickly developed a deep fascination for <span className='highlight'>web development.</span><br/><br/> 
            My education in <span className='highlight'>SQL, Object-Oriented Programming (OOP), and Human-Computer Interaction (HCI)</span> has been instrumental
            in shaping my understanding of <br/><span className='highlight'>web development.</span> These disciplines have provided me with a robust foundation in 
            <span className='highlight'> database management, software design principles, and user-centric design,</span> all of which are crucial in creating 
            effective and user-friendly <span className='highlight'>web applications.</span><br/><br/> 
            This passion for technology and user experience design fueled my journey, leading me to an <span className='highlight'>internship in PHP 
            full-stack development</span> and further exploration through personal projects utilizing <span className='highlight'>React.</span> My goal is to continuously 
            evolve as a <span className='highlight'>front-end developer,</span> eager to embrace the challenges and innovations in this ever-evolving field.
            </p>
            
            <p className='bigTitle'>Internship & Work Experience</p>
            <ExeperienceList/>
            <p className='gap'></p>
            <p className='bigTitle'>Project</p>
            <ProjectDeploy/>
            <p className='bigTitle'>Education</p>
            <div className='time-container'>
                    <p className='jobName'><span className='highlight'>University of Washington Tacoma</span></p>
                    <p className='time'>June 2024</p>
            </div>

            <p className='educationDescription'>Bachelor of Science in Information Technology</p>
            <p className='educationDescription'>Dean's List Jun 2022 - 2023</p>
            <p className='educationDescription'>
                <div className='gapCreate'>3.78 GPA</div>
            </p>

            <p className='bigTitle'>Contact</p>
            <div className='gapCreate2'>
               <p className='contactInfo'>Email: <a href='mailto:tigonim41@gmail.com' className='links'>tigonim41@gmail.com</a></p>
            </div>
            <p className='contactInfo'>LinkedIn: <a href='https://www.linkedin.com/in/youngseo-ahn-649749220/' className='links'>https://www.linkedin.com/in/youngseo-ahn-649749220/</a></p>
            <p className='contactInfo'>Github: <a href="https://github.com/youngseoAhn" className='links'>https://github.com/youngseoAhn</a></p>

            <div className='gapCreate3'></div>
        </div>
    );
}