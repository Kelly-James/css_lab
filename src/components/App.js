import React, { Component } from 'react';
import Nav from './Nav';
import Menu from './Menu';
import Clock from './Clock';
import Cube from './Cube';
import Fractal from './Fractal';

import '../css/App.css';

class App extends Component {
  state = {
    showMenu: false,
    page: null
  }

  componentDidMount() {
    console.log('Mounted!');
  }

  componentWillUnmount() {
    console.log('Un-Mounted!');
  }

  toggleMenu = () => {
    const menu = document.querySelector('.menuContainer');
    if (!this.state.showMenu) {
      this.setState({ showMenu: true});
      menu.classList.remove('closed');
    } else {
      this.setState({ showMenu: false });
      menu.classList.add('closed');
    }
  }

  updatePage = (value) => {
    const page = value;
    this.setState({ page });
  }

  render() {
    if (this.state.page === 'Clock') {
      return (
        <div className="App">
          <Nav
            toggleMenu={this.toggleMenu}
          />
          <Menu
            updatePage={this.updatePage}
          />
          <Clock />
        </div>
      );
    }
    if (this.state.page === 'Cube') {
      return (
        <div className="App">
          <Nav
            toggleMenu={this.toggleMenu}
          />
          <Menu
            updatePage={this.updatePage}
          />
          <Cube />
        </div>
      );
    }
    if(this.state.page === 'Fractal') {
      return (
        <div className="App">
          <Nav 
            toggleMenu={this.toggleMenu}
          />
          <Menu
            updatePage={this.updatePage}
          />
          <Fractal />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav
            toggleMenu={this.toggleMenu}
          />
          <Menu
            updatePage={this.updatePage}
          />
        </div>
      );
    }
  }
}

export default App;
