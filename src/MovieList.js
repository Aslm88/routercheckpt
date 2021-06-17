import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';


function Movies () {
    
    const [results, setResults]= useState([]);
 useEffect (() => {
  fetch ('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
       .then ((res) => res.json())
       .then ((data) => {
         console.log(data);
           setResults (data.results);
       });
      }, []);
    return (

      <div >
           {results.map(result => (
             <h3 key={result.resultid}>
               <Link to={'MovieList/$(result.resultid}'}> 
               {result.title}
               </Link>
               </h3>
               
           ))}
      </div>

        

    );
}

export default Movies ;