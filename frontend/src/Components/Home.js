import React from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
import "./Home.css"
function Home() {

  return(
   
    <div >
         <Slider/>
         <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Your Recipes App</h1>
        <p>Discover and share delicious recipes with the world!</p>
      </header>

        <div/>
        <section className="search-recipes">
          <h2>Search for Recipes</h2>
          <p>Find your favorite recipes by name, ingredients, or cuisine.</p>
          <Link to="/search">
            <button className="btn btn-success orange-button">Start Searching</button>
          </Link>
        </section>
      
    </div>
    </div>
    
  )
}

export default Home
