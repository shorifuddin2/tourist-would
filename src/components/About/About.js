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
           
            <div className='col-4 mx-8 my-8 font-bold'>
            <p className='f-bold text-primary'>Next 6 Moth My Dream  I'm Proportional Complete Font Developer and sensitive Programer 2022 end year present my dream successfully programer fondant developer in website. I'm very actively worked this proportion,</p>
            </div>
        </div>
</div>
    );
};

export default About;