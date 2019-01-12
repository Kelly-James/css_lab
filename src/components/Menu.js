import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {

    handlePageUpdate = (event) => {
        console.log('Event Value - ', event.currentTarget.innerHTML)
        this.props.updatePage(event.currentTarget.innerHTML);
    }

    render() {
        return (
            <div className="menuContainer closed">
                <div className="menu">
                    <ul>
                        <li onClick={this.handlePageUpdate}>Cube</li>
                        <li onClick={this.handlePageUpdate}>Fractal</li>
                        <li onClick={this.handlePageUpdate}>Clock</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;