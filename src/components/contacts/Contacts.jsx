import "./Contacts.css"
import {contactMethods} from "../../info/portfolio-data"

function Contacts() {

    return(
        <section id="contacts">
            {contactMethods.map(contactMethod => {
                return(
                    <p>{contactMethod.url}</p>
                )
            })}
        </section>
    )
}

export default Contacts 