import React from 'react'
import { Link } from 'react-router-dom'

import workData from './workData.json'

class Work extends React.Component {

    state = {
        work: workData.projects,
        projectView: false,
        projectSelected: ''
    }

    clickHandler = (projectId) => {
        this.setState({
            projectView: true,
            projectSelected: projectId - 1
        })
    }

    revealProjectName = (projectId) => {
        const focusProject = document.getElementsByClassName('project-name')[projectId - 1]
        focusProject.classList.remove('project-name-remove')
        focusProject.classList.add('project-name-reveal')
    }

    removeProjectName = (projectId) => {
        const focusProject = document.getElementsByClassName('project-name')[projectId - 1]
        focusProject.classList.add('project-name-remove')
        focusProject.classList.remove('project-name-reveal')


    }

    render () {
        if ( this.state.projectView === false ){
            // DISPLAYS ALL CURRENT PROJECTS
            return (
                <>
                    <h1 className='my-work' id='work'>My Work</h1>
                    <div role='my work section' className='work-container'>
                        {this.state.work.map(project => {
                            return (
                                <div role='project container' className='project-container'>
                                    <h3 className='project-name'>{project.name}</h3>
                                    <img src={project.thumbnail} alt={`${project.name} thumbnail`} 
                                    onClick={() => this.clickHandler(project.id)} onMouseEnter={() => this.revealProjectName(project.id)} onMouseLeave={() => this.removeProjectName(project.id)}
                                    className='thumbnail' key={project.id} />
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        }
        else {
            const project = workData.projects[this.state.projectSelected]
            return (
                // DISPLAYS THE DETAILS OF THE PROJECT THAT HAS BEEN CLICKED ON
                <>
                    <h1 className='my-work' id='work'>My Work</h1>
                    <div role='selected project display' className='work-container'>
                        <h1 className='project-title'>{project.name}</h1>
                        <p className='project-summary'>
                            {project.summary}
                        </p>
                        <a href={project.link} className='project-link'>Project link</a>
                        <img src={project.images} alt={`${project.name} thumbnail`} className='project-image'/>
                    </div>
                </>
            )
        }
    } 
}

export default Work
