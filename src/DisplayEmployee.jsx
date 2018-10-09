import React from 'react';

const DisplayEmployee = ({employee}) => {
    return(
        <div className='DisplayEmployee'>
            <img src={employee.image} alt='...' />
            <ul>
                <li>Quote : {employee.quote}</li>
                <li>character : {employee.character}</li>
                <li>character direction : {employee.characterDirection}</li>
            </ul>
        </div>
    );
};

export default DisplayEmployee;