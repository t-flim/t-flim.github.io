import "./Header.css"
import {hero} from "../../info/portfolio-data"

function Header() {
    const {firstName, lastName, title, location} = hero
    
    return(
        <header id="header">
            <div className="container">
                <div className="hero">
                    <h1 className="hero--name">{lastName} {firstName}</h1>
                    <h5 className="hero--title">{title}</h5>
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="hero--location">{location}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header