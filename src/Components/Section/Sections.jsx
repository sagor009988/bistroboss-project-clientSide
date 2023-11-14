import React from 'react';

const Sections = ({heading,subHeading}) => {
    return (
        <div className='text-center md:w-1/4 mx-auto' >
            <p className='text-orange-400'>
                {subHeading}
            </p>

            <h3 className='text-4xl font-bold border-y-4 my-5'>
                {heading}
            </h3>
        </div>
    );
};

export default Sections;