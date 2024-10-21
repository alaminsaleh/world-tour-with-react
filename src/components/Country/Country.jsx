import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'blue' : 'red' }}>{name?.common}</h3>
            <img className='resize-flag' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            {/* <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <b></b> */}

            {/* use below two function at time instead of upper two button */}
            <button onClick={() => {
                handleVisitedCountry(country);
                handleVisitedFlags(country.flags.png);
            }}>
                Mark Visited
            </button>


            <button className='gap-in-button' onClick={handleVisited}>{visited ? 'Visited ' : 'Going'}</button>
            {
                visited ? 'I have visited.' : 'I want to Visit'
            }
        </div>
    );
};

export default Country;
