import React from 'react';
import '../css/Cube.css';

class Cube extends React.Component {
    render() {
        return (
            <div className="cubeWrapper">
                <div className="cube">
                    {/* <!-- front --> */}
                    <div></div>
                    {/* <!-- back --> */}
                    <div></div>
                    {/* <!-- left --> */}
                    <div></div>
                    {/* <!-- right --> */}
                    <div></div>
                    {/* <!-- top --> */}
                    <div></div>
                    {/* <!-- bottom --> */}
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Cube;