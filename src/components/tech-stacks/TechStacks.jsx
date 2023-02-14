import "./TechStacks.css"
import {techStacks} from "../../info/portfolio-data"

function TechStacks() {


    return(
        <section id="tech-stacks">
            {techStacks.map(techStack => {
                return(
                    
            <i key={techStack.id} className={`devicon-${techStack.url}`}></i>
          
                )
            })}
        </section>
    )
}

export default TechStacks