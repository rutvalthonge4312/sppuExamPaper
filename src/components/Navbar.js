import React from 'react'

function Navbar() {
    const handleMode = (e) => {
        if (e.target.checked) {
            document.body.style.backgroundColor = "rgb(31, 31, 31)";

            var containers = document.getElementsByClassName("container");
            var card = document.getElementsByClassName("card");
            var staticBackdrop = document.getElementsByClassName("modal-content");
            staticBackdrop[0].classList.add("dark")
            for (var i = 0; i < containers.length; i++) {
                containers[i].classList.add("dark");

            }
            for (var i = 0; i < card.length; i++) {
                card[i].classList.add("darkCard");
            }
        }
        else {
            document.body.style.backgroundColor = "rgb(231, 231, 231)";
            var containers = document.getElementsByClassName("container");
            var card = document.getElementsByClassName("card");
            var staticBackdrop = document.getElementsByClassName("modal-content");
            staticBackdrop[0].classList.remove("dark")
            for (var i = 0; i < containers.length; i++) {
                containers[i].classList.remove("dark");

            }
            for (var i = 0; i < card.length; i++) {
                card[i].classList.remove("darkCard");
            }

        }

    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SPPU Student Help</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>


                    </ul>
                    <div class="form-check form-switch mx-3">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleMode} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
            </div>
        </nav>
    )
}

export default Navbar