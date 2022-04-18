import React from 'react';
import img from '../../images/milon-2.png'

const About = () => {
    return (
        <div className='m-40 bg-fuchsia-200 md:grid-col-2 grid-col-1 '>
            <h1 className='text-center  p-6 feature-title'>My Dream</h1>
            <div className='d-flex'>
            <div className=''>
                <img className='rounded-3 w-100' src={img}></img>
            </div>
           
            <div className=' mx-8 my-8 font-bold mt-40'>
            <p className='f-bold text-primary '>Next 6 Moth My Dream  I'm Proportional Complete Font Developer and sensitive Programer 2022 end year present my dream successfully programer fondant developer in website. I'm very actively worked this proportion,</p>
            </div>
        </div>
</div>
    );
};

export default About;