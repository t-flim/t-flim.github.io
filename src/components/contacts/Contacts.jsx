import "./Contacts.css"
import {contactMethods} from "../../info/portfolio-data"

function Contacts() {

    return(
        <section id="contacts">
            <div className="container">
                {contactMethods.map(contactMethod => {
                    return(
                        <p key={contactMethod.id}>{contactMethod.url}</p>
                    )
                })}
            </div>
        </section>
    )
}

export default Contacts 