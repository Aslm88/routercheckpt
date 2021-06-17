import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './about';
import Movies from './MovieList';
import Overview from './overview';
import Movie from './movies';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

           
  function App (){
    return(
      <Router>
        <div className="App" >
          <Nav/>
            <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/MovieList" exact component={Movies}/>
             <Route path="/MovieList/:id" component={Overview}/>
            </Switch>
        </div>
      </Router>
    );
  }

  const Home = ()=> (
    <div>
<h1>Home Page</h1>
<Movie></Movie>
    </div>
  );
    


  export default App ;