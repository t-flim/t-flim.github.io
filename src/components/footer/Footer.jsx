import "./Footer.css"

function Footer() {
    const currentYear = new Date().getFullYear()

    return(
        <footer id="footer">
            <p>
                &copy; {currentYear}
            </p>
        </footer>
    )
}

export default Footer