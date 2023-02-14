import "./TechStacks.css"
import {techStacks} from "../../info/portfolio-data"

function TechStacks() {

    return(
        <section id="tech-stacks">
            <div class="container row">
                {techStacks.map(techStack => {
                    return(
                        <i key={techStack.id} className={`stack-icon devicon-${techStack.url}`}></i>
                    )
                })}
            </div>
        </section>
    )
}

export default TechStacks