import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
       <main className="headerMain-container">
           <div className="first-half-headerMain">
                 <h1>Your New Smile <br/> Starts Here</h1>   
                 <p style={{color: 'gray'}}>Lorem ipsum dolor suio sja fhsal kjehr lskdhf asd sakh fhawoi afa. asdfh aklsdfal lahjlkjhf hjsl sdkf fjfdjjsa asdfjaf </p>
                 <button className="btn btn-primary">GET APPOINMENT</button>
            </div>  
            <div className="second-half-headerMain">
                <img src={chair} alt="" />
            </div>
       </main>
    );
};

export default HeaderMain;