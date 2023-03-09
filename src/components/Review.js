
import React, {useState, useRef} from 'react';

function Review() {

    const [isClicked, setClicked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(toSend);
    send(
      "service_iryb57a",
      "template_vjk0znj",
      toSend,
      '6whHcU3NoQSrGV7PG'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err.text);
      });
      alert('Your message was successfully sent!')
    }

    const handleClick = () => {

        setClicked(!isClicked);
        }

    return (
        <div>   
            <h5>Want to share your post-counselling thoughts? Click below to leave an anonymous review!</h5><br/>
            <button className="blue" onClick={handleClick}>Leave A Review</button>

            {isClicked && 
            <form method="post" onSubmit={handleSubmit}>
            <div>
                <span>How many sessions have you had?</span><br/>
        <input type="radio" id="contactChoice1" name="time" value="Just one" /><br/>
        <label htmlFor="contactChoice1">Just one</label><br/>

        <input type="radio" id="contactChoice2" name="time" value="Up to 5" /><br/>
        <label htmlFor="contactChoice2">Up to 5</label><br/>

        <input type="radio" id="contactChoice3" name="time" value="More than 5" /><br/>
        <label htmlFor="contactChoice3">More than 5</label><br/>
        </div>
        <div>
                <span>Are you likely to recommend KGC to a friend/relative?</span><br/>
        <input type="radio" id="return1" name="recommend" value="Very unlikely" /><br/>
        <label htmlFor="return1">Very unlikely</label><br/>

        <input type="radio" id="return2" name="recommend" value="Unlikely" /><br/>
        <label htmlFor="return2">Unlikely</label><br/>

        <input type="radio" id="return3" name="recommend" value="Unsure" /><br/>
        <label htmlFor="return3">Unsure</label><br/>

        <input type="radio" id="return4" name="recommend" value="Likely" /><br/>
        <label htmlFor="return4">Likely</label><br/>

        <input type="radio" id="return5" name="recommend" value="Very likely" /><br/>
        <label htmlFor="return5">Very likely</label><br/>
        </div>

        <div>
                <span>Are you planning on seeking additional counselling?</span><br/>
        <input type="radio" id="returning1" name="returning" value="Very unlikely" /><br/>
        <label htmlFor="returning1">Very unlikely</label><br/>

        <input type="radio" id="returning2" name="returning" value="Unlikely" /><br/>
        <label htmlFor="returning2">Unlikely</label><br/>

        <input type="radio" id="returning3" name="returning" value="Unsure" /><br/>
        <label htmlFor="returning3">Unsure</label><br/>

        <input type="radio" id="returning4" name="returning" value="Likely" /><br/>
        <label htmlFor="returning4">Likely</label><br/>

        <input type="radio" id="returning5" name="returning" value="Very likely" /><br/>
        <label htmlFor="returning5">Very likely</label><br/>
        </div>

        <label htmlFor="message">Your Message</label><br/>
            <textarea id="message"
                      name='message' 
                      required 
                      cols="30" 
                      rows="10" 
                      value=""
                      onChange=""
                      placeholder="My counselling experience...">
                      </textarea><br/>
            </form>
            }
        </div>
    );
}

export default Review;