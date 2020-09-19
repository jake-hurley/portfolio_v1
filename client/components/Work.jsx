import React from 'react'

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
            return (
                <>
                    <h1 className='my-work' id='work'>My Work</h1>
                    <div role='my work section' className='work-container'>
                        {this.state.work.map(project => {
                            return (
                                <img src={project.thumbnail} alt={`${project.name} thumbnail`} onClick={() => this.clickHandler(project.id)} className='thumbnail' key={project.id} />
                            )
                        })}
                    </div>
                </>
            )
        }
        else {
            return (
                // displays the project details of the project that was clicked
                <>
                <h1>the project selected was {workData.projects[this.state.projectSelected].name}</h1>
                </>
            )
        }
    } 
}

export default Work
