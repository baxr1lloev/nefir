

const Second = () => {
    return (
        <div id="mainThirdSection">
            <h2 data-aos="fade-down">Live Auction</h2>
            <div id="mainThirdSectionSlider" data-aos="zoom-in">
                <div classNameName="mainThirdSectionSliderCard" style={{"margin": "50px 0"}}>
                    <div classNameName="mainThirdSectionSliderCardTop">
                        <img src="./thirdSectionLeftCardOne.png" />
                    </div>
                    <div classNameName="mainThirdSectionSliderCardLeft">
                        <img src="./thirdSectionLeftCardTwo.png" />
                        <h3>Onus Medu</h3>
                        <p>By davincidante</p>
                        <div>
                            <img src="./thirdSectionCardSearch.png" />
                            <p>Highest bid</p>
                            <span>0.02Eth</span>
                        </div>
                    </div>
                    <div classNameName="mainThirdSectionSliderCardRight">
                        <p>5.12 ETH</p>
                        <span>8 in stock</span>
                    </div>
                    <div id="Timer2" className="end">
                        <p id="hours2"></p>
                        <p id="minutes2"></p>
                        <p id="secs2"></p>
                        <p id="end2"></p>
                    </div>
                    <div className="mainThirdSectionSliderCardBottom">
                        <button className="placeBid">Place Bid</button>
                        <button className="viewImg">View</button>
                    </div>
                </div>
                <div className="mainThirdSectionSliderCard">
                    <div className="mainThirdSectionSliderCardTop">
                        <img
                            src="./thirdSectionMiddleCardOne.png"
                            style={{"padding-top": "20px"}}
                        />
                    </div>
                    <div className="mainThirdSectionSliderCardLeft">
                        <img
                            src="./thirdSectionMiddleCardTwo.png"
                        />
                        <h3>Dream Big</h3>
                        <p>By itvrn</p>
                        <div>
                            <img src="assets/mainThirdSection/thirdSectionCardSearch.png" />
                            <p>Highest bid</p>
                            <span>0.12Eth</span>
                        </div>
                    </div>
                    <div className="mainThirdSectionSliderCardRight">
                        <p>2.45 ETH</p>
                        <span>6 in stock</span>
                    </div>
                    <div id="Timer3" className="end">
                        <p id="hours3"></p>
                        <p id="minutes3"></p>
                        <p id="secs3"></p>
                        <p id="end3"></p>
                    </div>
                    <div className="mainThirdSectionSliderCardBottom">
                        <button className="placeBid">Place Bid</button>
                        <button className="viewImg">View</button>
                    </div>
                </div>
                <div className="mainThirdSectionSliderCard" style={{"margin": "50px 0"}}>
                    <div className="mainThirdSectionSliderCardTop">
                        <img src="./thirdSectionRightCardOne.png" />
                    </div>
                    <div className="mainThirdSectionSliderCardLeft">
                        <img src="./thirdSectionRightCardTwo.png" />
                        <h3>Oddoties</h3>
                        <p>By brellias</p>
                        <div>
                            <img src="assets/mainThirdSection/thirdSectionCardSearch.png" />
                            <p>Highest bid</p>
                            <span>0.08Eth</span>
                        </div>
                    </div>
                    <div className="mainThirdSectionSliderCardRight">
                        <p>1.45 ETH</p>
                        <span>3 in stock</span>
                    </div>
                    <div id="Timer4" className="end">
                        <p id="hours4"></p>
                        <p id="minutes4"></p>
                        <p id="secs4"></p>
                        <p id="end4"></p>
                    </div>
                    <div className="mainThirdSectionSliderCardBottom">
                        <button className="placeBid">Place Bid</button>
                        <button className="viewImg">View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Second;