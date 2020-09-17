import React from 'react'

import workData from './workData.json'

class Work extends React.Component {

    state = {
        work: workData.projects
    }

    render () {
        return (
            <>
                <h1 className='my-work' id='work'>My Work</h1>
                <div role='my work section' className='work-container'>
                    {this.state.work.map(project => {
                        return (
                            <img src={project.thumbnail} alt={`${project.name} thumbnail`} className='thumbnail' key={project.id} />
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Work
