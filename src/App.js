import DatePicker from "react-datepicker";
import React, {useState} from 'react';
import './App.css';
import DueDate from "./Components/DueDate";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <strong>Set a due date</strong>
      <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm:ss"
      timeIntervals={1}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    <DueDate dueDate={startDate}/>
    </div>
  );
}

export default App;
