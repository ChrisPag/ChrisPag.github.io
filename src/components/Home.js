import './Home.css';
import {NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
        <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
}

export default Home;