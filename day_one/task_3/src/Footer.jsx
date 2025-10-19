function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>© {year} My App</p>
        </footer>
    );
}
export default Footer;