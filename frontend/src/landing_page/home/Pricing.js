import React from "react"

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-4 mb-3'>Transparent, flat pricing</h1>
                    <p>
                          Simple and honest pricing with zero hidden fees. 
                          Enjoy flat charges across trades — no surprises, ever.
                    </p>
                    <a href=''>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                         <div className="col p-3 border">
                              <h1 className='mb-3'>₹0</h1>
                              <p>
                                 No charges on equity delivery<br />
                                 and direct mutual fund investments
                              </p>
                         </div>
                         <div className="col p-3 border">
                               <h1 className='mb-3'>₹20</h1>
                              <p>
                                 Flat fee per order on intraday<br />
                                 and derivatives (F&O) trades
                              </p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;