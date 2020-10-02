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

    returnToProjects = () => {
        this.setState({
            projectView: false,
            projectSelected: ''
        })
    }

    render () {
        if ( this.state.projectView === false ){
            // DISPLAYS ALL CURRENT PROJECTS
            return (
                <>
                    <h1 className='my-work' id='work'>My Work</h1>
                    <div role='my work section' className='work-container reveal'>
                        {this.state.work.map(project => {
                            return (
                                <div role='project container' className='project-container' key={project.id}>
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
                    <div role='selected project display' className='work-container reveal'>
                        <img src='/icons/cross.svg' alt='return to projects' className='project-cross' onClick={() => this.returnToProjects()}/>
                        <h1 className='project-title'>{project.name}</h1>
                        <p className='project-summary'>
                            {project.summary}
                        </p>
                        <div role='displays project stack icons' className='project-stack'>
                            {project.stack.map(icon => {
                                return (
                                    <img src={`/icons/${icon}.svg`} className='project-stack-icon'/>
                                )
                            })}    
                        </div>
                        {project.images.map(image => {
                            return (
                                    <img src={image} alt={`${project.name} thumbnail`} className='project-image'/>
                            )
                        } )}
                        <a target='_blank' href={project.link} className='project-link'>Checkout {project.name} here!</a>

                    </div>
                </>
            )
        }
    } 
}

export default Work
