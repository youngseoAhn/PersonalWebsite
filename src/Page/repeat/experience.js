import React from 'react';
import Experience from './workData';
import '../Components.css';

const ExeperienceList = () => {
    return (
        Experience.map(exe => (
            <div>
                <div className='time-container'>
                    <p className='jobName'><span className='highlight'>{exe.jobname}</span></p>
                    <p className='time'>{exe.time}</p>
                </div>
                <p className='CompanyName'>{exe.companyName}</p>
                <p className='jobDescription'>{exe.description}</p>
            </div>
        ))
    );
};

export default ExeperienceList;