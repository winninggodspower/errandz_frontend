import navLogo from '../images/errandz-logo.svg'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md fixed-top navbar-dark" style={{height: '100px'}} >
            <a href="index.html" class="navbar-brand ms-5">
                <img src={navLogo} alt="errandz-logo" class="errandzLogo" height="44.67px" width="134px" />
            </a>
            <button class="navbar-toggler me-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav ms-auto me-5">
                    <a href="index.html" class="nav-link active me-3" aria-current="page">Home</a>
                    <a href="about.html" class="nav-link me-3">About</a>
                    <a href="faq.html" class="nav-link me-3">FAQs</a>
                    <a href="contact.html" class="nav-link me-5">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;