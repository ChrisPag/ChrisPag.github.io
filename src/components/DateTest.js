import { useState } from 'react';

const DateTest = () => {
    
    const date = new Date();
    date.setDate(date.getDate() - 2);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.getDate();
    let formattedDate = year + '-' + month + '-' + day;

    const [fromYear, setFromYear] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    return (
        <div className ="date">
            <form onSubmit = {handleSubmit}>
                <label>Select from date: </label>
                
                <select value="Radish"
                    value={ year}
                    onChange={(e) => setFromYear(e.target.value)}>
                    
                    {monthNames.map((months, i) => 
                    <option value = {months} key={i}> {months} </option>
                    )}
                </select>
                <button id="submit">Submit</button>
            </form>
        </div>
    );
}
  
export default DateTest;