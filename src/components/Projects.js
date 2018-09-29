import React from 'react';
import ProjectItems from './ProjectItems'

class Project extends React.Component {
  state = {
    goo: [
      {
        color: 'green',
        category: 'viscous'
      }
    ]
  }

  render() {
    console.log(this.props)
    return (
        <div className="Projects">
          <ProjectItems goo={this.state.goo} />
          sam
        </div>
    );
  }
}

export default Project;
