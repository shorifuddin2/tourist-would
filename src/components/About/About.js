import React from 'react';
import img from '../../images/milon-2.png'

const About = () => {
    return (
        <div className='container mx-8 my-8 bg-fuchsia-200'>
            <h1 className='text-center mt-20 p-6 feature-title'>My Dream</h1>
            <div className='d-flex'>
            <div className='col-4 '>
                <img className='rounded' src={img}></img>
            </div>
           
            <div className='col-4 mx-8 my-8'>
            <p className='f-bold text-primary'>Next 6 Moth My Dream  I'm Propetionl Complete Font Developer and sencetiv Programer 2022 end year present my dream succfully programar fontant developer in website.</p>
            </div>
            </div>

        </div>
    );
};

export default About;