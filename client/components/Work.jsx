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
                            <h1 key={project.id}>{project.name}</h1>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Work
