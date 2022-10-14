import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';




function BtnPrimary({title}) {
    let navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/gamelevel1')} className='btn-primary' >{title}</button>  
        </div>
    );
}

export default BtnPrimary;