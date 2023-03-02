

import React, {useState} from 'react';
import { send, sendForm } from 'emailjs-com';
function Form() {

    const [toSend, setToSend] = useState({
        name: 'test',
        email: 'test@test.com',
        message: 'hi sucka',
        extra: 'test2',
        options: 'Other',
      });


    const handleSubmit = () => {
        
        console.log(toSend);
    sendForm(
      'service_iryb57a',
      'template_vjk0znj',
      '#sendform',
      'gMR92eFA3T6gvrUzV'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err.text);
      });
    }

    const handleForm = (e) => {
       
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    

    return (
        <div>
            {/* using Gmail service_iryb57a as an endpoint to send emails from*/}
          <form id='sendform' method="post" onSubmit={handleSubmit}>
            <label htmlFor="name"> Name</label><br/>
            <input type="text" name='name' id="name" value={toSend.name} onChange={handleForm} required/><br/>

            <label htmlFor="email">Email</label><br/>
            <input type="email" name='email' id="email" value={toSend.email} onChange={handleForm} required/><br/>
            
        <label htmlFor="options">Why you decided to seek out counselling</label><br/>
            <select id="options" 
                    name="options" 
                    value={toSend.options}
                    onChange={handleForm}>
                <option value="Social & Relationships"> Social & Relationships </option>
                <option value="Family Matters"> Family Matters</option>
                <option value="Discuss Careers & Future"> Discuss Careers & Future</option>
                <option value="Mental Health"> Mental Health</option>
                <option value="Past Experiences"> Past Experiences</option>
                <option value="Other"> Other</option>
                <option value="Unsure"> I don't know.</option>


            </select><br></br>
            {toSend.options.valueOf() === "Other" ? <div>
                <label htmlFor="extra">Your Message</label><br/>
            <textarea id='extra' 
                      name='extra' 
                      value={toSend.extra} 
                      onChange={handleForm} 
                      placeholder="If other, tell me why">
            </textarea>
            </div> : <div></div>}

            <label htmlFor="message">Your Message</label><br/>
            <textarea id="message"
                      name='message' 
                      required 
                      cols="30" 
                      rows="10" 
                      value={toSend.message} 
                      onChange={handleForm} 
                      placeholder="I'd like to try counselling for...">
                      </textarea><br/>
                      <div style={{margin:"10px"}}></div>
            <button className="green" type="submit">Send Message</button><br></br>
            <div style={{margin:"10px"}}></div>
            <button className="blue">Leave A Review</button>
        </form>  
        </div>
    );
}

export default Form;