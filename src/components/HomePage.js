import React from 'react'
import SubHeader from '../components/SubHeader'
import Section from '../components/Section'
import Header from '../components/Header'

import skillsInfo from '../assets/sectionInfo/skillsInfo'
import projectInfo from '../assets/sectionInfo/projectInfo'
import coursesInfo from '../assets/sectionInfo/coursesInfo'



const HomePage = () => (
    <div>
    <Header />
    <SubHeader />
        <div className="content">
            <Section title="Projects" items={projectInfo}/>
            <Section title="Skills" items={skillsInfo}/>
            <Section title="Courses" items={coursesInfo}/>
        </div>
    </div>
        )

export default HomePage