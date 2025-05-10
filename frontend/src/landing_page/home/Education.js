import React from "react"

function Education()
{
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img className='Education' src='media/images/education.svg'/>
                </div>
                <div className='col-6'>
                              <h1 className='mb-3'>Free and open market education</h1>
                              <p>
                                   Learn everything from the fundamentals of investing to advanced 
                                   trading strategies with our in-depth, beginner-friendly modules.
                              </p>
                              <a href=''>LearnHub <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                              <p className='mt-5'>
                                   Join our active community where 
                                   investors and traders come together 
                                   to share knowledge, ask questions, and
                                    grow together.

                              </p>
                              <a href=''>InvestForum <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;