import "./NavBar.css"
import {projects, techStacks, contactMethods} from "../../info/portfolio-data"

function NavBar() {

    return(
        <nav id="nav">
            <ul className="nav__list">
                <li className="nav__list--item">
                    <a href="#hero">Home</a>
                </li>
                {(projects.length > 0) && <li className="nav__list--item">
                    <a href="#projects">Projects</a>
                </li>}
                {(techStacks.length > 0) && <li className="nav__list--item">
                    <a href="#tech-stacks">Tech Stack</a>
                </li>}
                {(contactMethods.length > 0) && <li className="nav__list--item">
                    <a href="#contacts">Contact</a>
                </li>}
            </ul>
        </nav>
    )
}

export default NavBar