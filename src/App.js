

import React, {useState, useRef} from 'react';


import Form from './components/Form';
import Calendar from './components/Calendar';
import Review from './components/Review';


export default function App(){
    
    

    return(
        <div className='page'>
    <div className="container header">
    <header className="row">
        
        <h2>Michal Pabjanczyk - Digital Marketing Expert</h2>
    </header>
    
        <div className="row cover">
            <div className="col-md-6">
        
            
            <img src="/images/ChessSet.jpg" width={0.2}/>
            
    </div>
    <div className="col-md-6"><p>
    </p></div>
    </div>
    <div className="row main">
        <div className='col-md-6' >
       
        </div>
        <div className='col-md-6' >
            <img src='/images/counselling1.jpg' width={0.2} height={0.2}/>
        </div>




    </div>
    <div className="row">
   
        <br/>
        
    </div>

    <div className="row users">

        <Form />
            
            
    </div>
        <div className='row review'>
            <Review/>
        </div>
        <br/>
    </div>
    </div>
    )

}

