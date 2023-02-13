import "./Header.css"
import {hero} from "../../info/portfolio-data"

function Header() {
    const {firstName, lastName, location} = hero
    
    return(
        <header id="hero">
            <div class="hero-name">
                <h1>{firstName} {lastName}</h1>
                <p></p>
            </div>
            <p>{location}</p>
        </header>
    )
}

export default Header