

import React from 'react';
import { ReactDOM } from 'react';

import Form from './components/Form';
import Calendar from './components/Calendar';


export default function App(){
    
    const styles={
        backgroundImage: "url(images/leafpattern.jpg)",
        width: '100vw',
        height: '100vw',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return(
        <div style={styles}>
    <div className="container header">
    <header className="row">
        
        <h2>Kat's Counselling</h2>
    </header>
    
        <div className="row cover">
            <div className="col-md-6">
        
            {/* https://www.shutterstock.com/search/counselor-cartoon */}
            <img src="/images/counselling.jpg" />
        
    </div>
    <div className="col-md-6"><p>Have things been feeling different for you lately? 
        Perhaps you have unanswered questions about your life. Come relax with a cup of tea and get all that energy off your chest
    </p></div>
    </div>
    <div className="row main">
        <div className='col-md-6' >
        My aim is to provide a safe and non-judgmental space for clients to explore their thoughts and feelings, and to help them develop the tools and strategies they need to overcome their challenges and improve their overall well-being. I offer a variety of counselling modalities, including cognitive-behavioural therapy (CBT), psychodynamic therapy, and person-centred therapy, among others, to cater to each client's unique needs and preferences.

        In addition, I offer online counselling sessions for those who prefer to access counselling from the comfort of their own home or office.

        </div>
        <div className='col-md-6' >
            <img src='/images/counselling1.jpg' width={0.2} height={0.2}/>
        </div>




    </div>
    <div className="row calendar">
    I believe in working collaboratively with my clients, empowering them to take an active role in their therapy journey. Whether you're struggling with anxiety, depression, relationship issues, or other challenges, I'm here to support you on your path to healing and growth.

If you're interested in learning more about my counselling services or would like to schedule a confidential appointment with me, please don't hesitate to contact me. I look forward to hearing from you!
        <br/>
        <Calendar/>
    </div>

    <div className="row users">

        <Form />

    </div>

        <br/>
    </div>
    </div>
    )

}

