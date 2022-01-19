import { useState } from 'react';
import Content from './Content';

const Dashboard = () => {
    
    const getDate = (daysPrior) =>{
        const date = new Date();
        date.setDate(date.getDate() - daysPrior)
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let day = date.getDate();
        let formattedDate = year + '-' + month + '-' + day;

        return (formattedDate)
    }
    
    const initialStart = getDate(2);
    const initialEnd = getDate(0);

    const [startValue, setStartValue] = useState(initialStart);
    const [endValue, setEndValue] = useState(initialEnd);

    const [startDate, setStartDate] = useState(initialStart);
    const [endDate, setEndDate] = useState(initialEnd);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setStartDate(startValue);
        setEndDate(endValue);
    }
    return (
        <div className ="dashboard">
            <form onSubmit = {handleSubmit}>
                <label>From date: </label>
                <input type ="date"
                    min = "1995-06-20"
                    value={ startValue }
                    onChange={(e) => setStartValue(e.target.value)}>
                </input><br />

                <label>To date: </label>
                <input type ="date"
                    value={ endValue }
                    onChange={(e) => setEndValue(e.target.value)}>
                </input>

                <button id="submit">Submit</button>
            </form>

            <Content startDate = {startDate} endDate = {endDate}/>
        </div>
    );
}
  
export default Dashboard;