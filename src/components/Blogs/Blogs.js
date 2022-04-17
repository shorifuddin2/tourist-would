import React from 'react';

const Blogs = () => {
    return (
        <div className='container m-8 mt-20 text-center '>
            <h1 className='feature-title'>Question page</h1>

            <div className=' bg-lightgray'>
                <div className=''>
                <h1>1.<span className='font-bold text-danger p-2'> Question</span> Authinzution Vs Authentication..??</h1>
                <p><small className='font-bold text-primary mx-3'>Answer: </small> Authinzution is Other </p>
                <h1>2.<span className='font-bold text-danger p-2'> Question</span> Why are you using firebase..??</h1>
                <p><small className='font-bold text-primary mx-3'>Answer: </small> firebase is mins this Authinzution major part</p>
                <h1>3.<span className='font-bold text-danger p-2'> Question</span> firebase pravide other then Authentication..??</h1>
                <p><small className='font-bold text-primary mx-3'>Answer: </small> Firebase is ins cariyar manitnion</p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;