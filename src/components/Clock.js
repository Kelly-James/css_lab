import React from 'react';
import '../css/Clock.css';

class Clock extends React.Component {

    setDate = () => {
        const now = new Date();

        const secondHand = document.querySelector('.second-hand');
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        if (seconds >= 60) {
            secondHand.style.transition = '';
        }

        const minuteHand = document.querySelector('.minute-hand');
        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hourHand = document.querySelector('.hour-hand');
        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    componentDidMount() {
        setInterval(this.setDate, 1000);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-face">
                    <div className="hand hour-hand"></div>
                    <div className="hand minute-hand"></div>
                    <div className="hand second-hand"></div>
                </div>
            </div>
        )
    }
}

export default Clock;