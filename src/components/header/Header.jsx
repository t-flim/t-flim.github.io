import "./Header.css"
import {hero} from "../../info/portfolio-data"

function Header() {
    const {firstName, lastName, title, location} = hero
    
    return(
        <header id="hero">
            <div class="hero-name">
                <h1>{firstName} {lastName}</h1>
                <h4>{title}</h4>
            </div>
            <p>{location}</p>
        </header>
    )
}

export default Header