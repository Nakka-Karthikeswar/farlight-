import React from "react";
import "./header.css"

export default function body(){
    return(
            <header>
                <div class="container">
                <nav className="nav">
                        <div className="flex nav-container">
                            <div className="logo">
                                <a href="/"><img src="images/logo.png" alt="logo"/></a>
                                <span className="logo-span"><img src="images/nav_logo_bar.png" alt="span"/></span>
                            </div>
                            <ul className="flex">
                                <li className="pur"><a href="/"><i>PURCHASE</i></a></li>
                                <li className="logo-bd skew"><a href="/">
                                    <img src="images/icon-logo-white.png" alt="e" />
                                </a></li>
                                <li><a href="/">PREP ROOM</a></li>
                                <li><a href="/">HEROS</a></li>
                                <li><a href="/">FEATURES</a></li>
                                <li><a href="/" title="Farlight 84">NEWS</a></li>
                                <li className="flex budy skew">
                                    <span className="budy-img">
                                        <img src="images/icon-bd.png" alt="bd"/>
                                    </span>
                                    <a href="/" >BUDDIES</a>
                                    <span className="arow">
                                        <img src="images/icon-clink-2.png" alt="bd"/>
                                    </span>
                                </li>
                                <li className="flex ">
                                    <a href="/">ESPORTS</a>
                                    <span className="arow">
                                        <img src="images/menu-arrow.png" alt="bd"/>
                                    </span>
                                </li>
                                <li className="flex ">
                                    <a href="/">CREATORS</a>
                                    <span className="arow">
                                        <img src="images/menu-arrow.png" alt="bd"/>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="plyno">
                                <a href="/">PLAY NOW</a>
                            </div>
                </nav>
                    </div>
            </header>

    )
}