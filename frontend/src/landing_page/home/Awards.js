import React from "react"

function Awards()
{
    return (
        <div className='conatiner mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-2'>Invest with confidence on India’s leading platform</h1>
                    <p className='mb-5'>  
                        Join a growing community of smart investors contributing to a significant 
                        share of daily retail trades across India — all through one seamless platform for:
                    </p>
                    <div className='row'>
                        <div className="col-6">
                             <ul>
                                <li><p>Stocks & Equity</p></li>
                                <li><p>Mutual Funds & ETFs</p></li>
                                <li><p>Bonds & Fixed Income</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                             <li><p>Stocks & IPOs</p></li>
                             <li><p>Direct Mutual Funds</p></li>
                             <li><p>Bonds & Government Securities</p></li>
                            </ul>
                        </div>
                        <img className='media mt-5'src='media/images/pressLogos.png'/>
                    </div>
                   

                </div>
            </div>
        </div>
    );
}

export default Awards;