import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import './Calendar.css'


function Calendar() {

  const [date, setDate] = useState(new Date());
  
  

    return (
      <div className='calendar'>
        <DatePicker value={date} onChange={setDate} closeCalendar={false} maxDetail="month"/>
      </div>
    );
  }
  export default Calendar;