import React from 'react';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda}  from '@syncfusion/ej2-react-schedule';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScheduleComponent>
        <Inject services={{Day, Week, WorkWeek, Month, Agenda}} />
      </ScheduleComponent>
    </div>
  );
}

export default App;
