import "./Footer.css"

function Footer() {
    const currentYear = new Date().getFullYear()

    return(
        <footer id="footer">
            <div className="container">
                <p>
                    &copy; {currentYear}
                </p>
            </div>
        </footer>
    )
}

export default Footer