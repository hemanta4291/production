import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col col-auto my-auto">
                            <a href="/" className="logo">Show Case Gallery</a>
                        </div>
                        <div className="col-auto my-auto text-right">
                            <div className="mainmenu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/About">About</a></li>
                                    <li><a href="/Disclaimer">Disclaimer</a></li>
                                    <li><a href="/Credits">Credits</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
