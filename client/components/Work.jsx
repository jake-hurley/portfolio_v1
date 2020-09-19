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

    render () {
        if ( this.state.projectView === false ){
            // DISPLAYS ALL CURRENT PROJECTS
            return (
                <>
                    <h1 className='my-work' id='work'>My Work</h1>
                    <div role='my work section' className='work-container'>
                        {this.state.work.map(project => {
                            return (
                                <>
                                    <h3 className='project-name'>{project.name}</h3>
                                    <img src={project.thumbnail} alt={`${project.name} thumbnail`} onClick={() => this.clickHandler(project.id)} className='thumbnail' key={project.id} />
                                </>
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
                        <Link to={project.link} className='project-link'>Project link</Link>
                        <img src={project.thumbnail} alt={`${project.name} thumbnail`} className='project-image'/>
                    </div>
                </>
            )
        }
    } 
}

export default Work
