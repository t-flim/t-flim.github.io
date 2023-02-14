import "./TechStacks.css"
import {techStacks} from "../../info/portfolio-data"

function TechStacks() {


    return(
        <section id="tech-stacks">
            <div className="container">
                <div className="inner-container">
                    {techStacks.map(techStack => {
                        return(
                    
                    <i key={techStack.id} className={`devicon-${techStack.url}`}></i>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TechStacks