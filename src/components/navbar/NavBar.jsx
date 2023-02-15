import "./NavBar.css"
import {projects, technologies, contactMethods} from "../../info/portfolio-data"

function NavBar() {

    return(
        <nav id="nav">
            <ul className="nav__list row container">
                <li className="nav__list--item">
                    <a className="nav__list--link" href="#" name="home">Home</a>
                </li>
                {(projects.length > 0) && <li className="nav__list--item">
                    <a className="nav__list--link" href="#projects" name="projects">Projects</a>
                </li>}
                {(technologies.length > 0) && <li className="nav__list--item">
                    <a className="nav__list--link" href="#technologies" name="technologies">Technologies</a>
                </li>}
                {(contactMethods.length > 0) && <li className="nav__list--item">
                    <a className="nav__list--link" href="#contacts" name="contacts">Contact</a>
                </li>}
            </ul>
        </nav>
    )
}

export default NavBar