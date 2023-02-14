import "./NavBar.css"
import {projects, techStacks, contactMethods} from "../../info/portfolio-data"

function NavBar() {

    return(
        <nav id="nav">
            <ul className="nav__list row container">
                <li className="nav__list--item">
                    <a className="nav__list--link" href="#header">Home</a>
                </li>
                {(projects.length > 0) && <li className="nav__list--item">
                    <a className="nav__list--link" href="#projects">Projects</a>
                </li>}
                {(techStacks.length > 0) && <li className="nav__list--item">
                    <a className="nav__list--link" href="#tech-stacks">Tech Stack</a>
                </li>}
                {(contactMethods.length > 0) && <li className="nav__list--item">
                    <a className="nav__list--link" href="#contacts">Contact</a>
                </li>}
            </ul>
        </nav>
    )
}

export default NavBar