import React from "react"

function Stats()
{
    return (
       <div className='conatiner p-5'>
           <div className='row p-5'>
            <div className='col-6 p-5'>
                 <h1 className='fs-2 mb-5'>Trust built through transparency</h1>
                 <h2 className='fs-4'>Customer-first, always</h2>
                 <p className='text-muted'>
                    That’s why millions of investors choose us to manage 
                    and grow their wealth confidently across diverse asset classes.
                 </p>
                 <h2 className='fs-4'>No spam. No distractions.</h2>
                 <p className='text-muted'>
                    No gimmicks, no spam, and no constant buzz. Just clean, 
                    intuitive tools that respect your time and put you in control.                 </p>
                 <h2 className='fs-4'>Beyond just an app</h2>
                 <p className='text-muted'>
                    Our growing ecosystem brings together trusted tools,
                    expert-backed insights, and smart integrations to 
                    support every step of your investment journey.
                 </p>
                 <h2 className='fs-4'>Smarter habits with your money</h2>
                 <p className='text-muted'>
                    From helpful nudges to powerful control features, 
                    we go beyond transactions — guiding you to make 
                    better financial decisions, every day.

                 </p>
            </div>
             <div className='col-6 p-5'>
                <img className='ecosystem'src='media/images/ecosystem.png'/>
                <div className='text-center'>
                  <a href='' className='mx-5'>
                     Explore our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                  <a href=''>Try kit demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
             </div>
           </div>
       </div>
    );
}

export default Stats;