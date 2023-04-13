import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Player from './components/Player';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
import Movies from './pages/Movies';
import TVShows from './pages/TV Shows';
import UserLiked from './pages/UserLiked';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/login' element= {<Login/>}/>
    <Route exact path='/signup' element= {<Signup/>}/>
    <Route exact path='/player' element= {<Player/>}/>
    <Route exact path='/movies' element= {<Movies/>}/>
    <Route exact path='/tv' element= {<TVShows/>}/>
    <Route exact path='/mylist' element= {<UserLiked/>}/>
    <Route exact path='/' element= {<Netflix/>}/>

    </Routes>
    
    </BrowserRouter> 
  )
}

export default App;

