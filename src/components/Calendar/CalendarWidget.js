import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarWidget() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="rCal">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarWidget;