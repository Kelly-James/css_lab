import React from 'react';
import '../css/Fractal.css';

class Fractal extends React.Component {
    render() {
        return (
            <div className="gridFrame">
                <div className="gridWrapper2">
                    <div className="center gridCell pulse"></div>
                    <div className="topCtr gridCell pulse">TC</div>
                    <div className="botCtr gridCell pulse">BC</div>
                    <div className="lftMidCtr gridCell pulse">LMC</div>
                    <div className="rtMidCtr gridCell pulse">RMC</div>
                    <div className="lftTopMid gridCell pulse">LTM</div>
                    <div className="topMidLft gridCell pulse">TML</div>
                    <div className="topMidRt gridCell pulse">TMR</div>
                    <div className="botMidLft gridCell pulse">BML</div>
                    <div className="botMidRight gridCell pulse">BMR</div>
                    <div className="rtTopMid gridCell pulse">RTM</div>
                    <div className="lftBotMid gridCell pulse">LBM</div>
                    <div className="rtBotMid gridCell pulse">RBM</div>
                    <div className="topLft gridCell pulse">TL</div>
                    <div className="topRt gridCell pulse">TR</div>
                    <div className="botLft gridCell pulse">BL</div>
                    <div className="botRight gridCell pulse">BR</div>
                </div>
            </div>
        );
    }
}

export default Fractal;