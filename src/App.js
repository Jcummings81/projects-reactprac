import React from 'react';
import './App.css';
import Projects from './components/Projects'

class App extends React.Component {
 state = {
  projects: [
    {
      title: 'Buisiness Website',
      category: 'Web Design'
    },

    {
      title: 'Social App',
      category: 'Mobile Development'
    },

    {
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development'
    }
  ]
}
  state
  render() {
    return (
    <Projects project = {this.state.projects} />
    );
  }
}

export default App;
