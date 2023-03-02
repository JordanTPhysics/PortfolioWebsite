import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import './Calendar.css'


function Calendar() {

  const [dates, setDates] = useState([new Date(),new Date()]);
  
  

    return (
      <div className='calendar'>
        <DatePicker value={dates} onChange={setDates} closeCalendar={false} maxDetail="month"/>
      </div>
    );
  }
  export default Calendar;