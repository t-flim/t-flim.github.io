import "./TechStacks.css"
import {techStacks} from "../../info/portfolio-data"

function TechStacks() {


    return(
        <section id="tech-stacks">
            <div className="container">
                {techStacks.map(techStack => {
                    return(
                
                <i key={techStack.id} className={`devicon-${techStack.url}`}></i>
                    )
                })}
            </div>
        </section>
    )
}

export default TechStacks