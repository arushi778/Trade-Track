import React from "react"

function Hero()
{
    return (
        <div className='conatiner p-5 mb-5'>
           <div className='row text-center'>
              <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
              <h1 className='mt-5'>Your gateway to smarter investing</h1>
              <p>
                Access stocks, mutual funds, ETFs, bonds, and derivatives from one seamless platform.
              </p>
              <button className = 'btn btn-primary mb-5'>Sign up Now</button>
           </div>
        </div>
    );
}

export default Hero;
