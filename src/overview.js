import React, {useState, useEffect} from 'react';



function Overview ({match}) {
    
    const [result, setResult]= useState({
        images: {},
    });
    
 useEffect (() => {
     console.log(match)
  fetch ('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
       .then ((res) => res.json())
       .then ((data) => {
         console.log(data);
           setResult (result);
       });
      }, [match,result]);
    return (

      <div >
          <h1>{result.title}</h1>
          <img src={result.images.transparent} alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

        

    );
}

export default Overview ;